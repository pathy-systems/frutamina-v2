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
    $env[trim($key)] = trim($value, " \t\n\r\0\x0B\"'");
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

        $authHeader = null;
        foreach (getallheaders() as $key => $value) {
            if (strtolower($key) === 'authorization') {
                $authHeader = $value;
                break;
            }
        }
        if ($authHeader) {
            $headers[] = $authHeader;
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
        echo json_encode(['error' => 'invalid_action']);
        break;
}
