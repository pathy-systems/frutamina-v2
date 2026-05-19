<?php
header('Content-Type: application/json');
header('Cache-Control: no-store, no-cache');

// Carrega variáveis do .env
$lines = file('.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$env = [];
foreach ($lines as $line) {
    if (strpos($line, '=') === false || $line[0] === '#') {
        continue;
    }
    [$key, $value] = explode('=', $line, 2);
    $env[trim($key)] = trim($value, " \t\n\r\0\x0B\"';");

}

$SUPABASE_URL = rtrim($env['SUPABASE_URL'] ?? '', '/');
$SUPABASE_KEY = $env['SUPABASE_KEY'] ?? '';

if (!$SUPABASE_URL || !$SUPABASE_KEY) {
    http_response_code(500);
    echo json_encode(['error' => 'missing_supabase_config']);
    exit;
}

$action = $_GET['action'] ?? '';

function proxy_request($url, $method, $body, $headers)
{
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    if ($method !== 'GET' && $body !== null) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
    }

    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($response === false) {
        http_response_code(502);
        echo json_encode(['error' => 'proxy_error', 'message' => $error]);
        exit;
    }

    http_response_code($status);
    echo $response;
    exit;
}

function get_request_headers()
{
    if (function_exists('getallheaders')) {
        return getallheaders();
    }

    $headers = [];
    foreach ($_SERVER as $name => $value) {
        if (substr($name, 0, 5) === 'HTTP_') {
            $header = str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))));
            $headers[$header] = $value;
        }
    }
    return $headers;
}

switch ($action) {
    case 'auth':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            echo json_encode(['error' => 'method_not_allowed']);
            exit;
        }

        $body = file_get_contents('php://input');
        $payload = json_decode($body, true);

        if (!is_array($payload) || empty($payload['email']) || empty($payload['password'])) {
            http_response_code(400);
            echo json_encode(['error' => 'missing_credentials']);
            exit;
        }

        $url = $SUPABASE_URL . '/auth/v1/token?grant_type=password';
        $headers = [
            'Content-Type: application/json',
            'apikey: ' . $SUPABASE_KEY
        ];
        proxy_request($url, 'POST', json_encode([
            'email' => $payload['email'],
            'password' => $payload['password']
        ]), $headers);
        break;

    case 'fetch':
        $path = $_GET['path'] ?? '';
        if (!$path || strpos($path, '/rest/v1/') !== 0) {
            http_response_code(400);
            echo json_encode(['error' => 'invalid_path']);
            exit;
        }

        $url = $SUPABASE_URL . $path;
        $headers = [
            'Content-Type: application/json',
            'apikey: ' . $SUPABASE_KEY
        ];

        $requestHeaders = get_request_headers();
        if (!isset($requestHeaders['Authorization']) && isset($_SERVER['HTTP_AUTHORIZATION'])) {
            $requestHeaders['Authorization'] = $_SERVER['HTTP_AUTHORIZATION'];
        }
        if (!isset($requestHeaders['Authorization']) && isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
            $requestHeaders['Authorization'] = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
        }
        if (!isset($requestHeaders['Authorization']) && isset($requestHeaders['X-Authorization'])) {
            $requestHeaders['Authorization'] = $requestHeaders['X-Authorization'];
        }
        if (!isset($requestHeaders['Authorization']) && isset($_SERVER['HTTP_X_AUTHORIZATION'])) {
            $requestHeaders['Authorization'] = $_SERVER['HTTP_X_AUTHORIZATION'];
        }
        if (!isset($requestHeaders['Authorization']) && isset($_SERVER['REDIRECT_HTTP_X_AUTHORIZATION'])) {
            $requestHeaders['Authorization'] = $_SERVER['REDIRECT_HTTP_X_AUTHORIZATION'];
        }

        foreach ($requestHeaders as $key => $value) {
            if (strtolower($key) === 'authorization') {
                $headers[] = 'Authorization: ' . $value;
                break;
            }
        }
        foreach ($requestHeaders as $key => $value) {
            if (strtolower($key) === 'prefer') {
                $headers[] = 'Prefer: ' . $value;
                break;
            }
        }

        $method = $_SERVER['REQUEST_METHOD'];
        $body = null;
        if ($method !== 'GET') {
            $body = file_get_contents('php://input');
        }

        proxy_request($url, $method, $body, $headers);
        break;

    default:
        http_response_code(400);
        echo json_encode([
            'error' => 'invalid_action',
            'received_action' => $action,
            'query_string' => $_SERVER['QUERY_STRING'] ?? ''
        ]);
        break;
}
