<?php
header('Content-Type: application/javascript');
header('Cache-Control: no-store, no-cache');

$envPath = __DIR__ . '/.env';
$lines = file_exists($envPath) ? file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) : [];
$env = [];
foreach ($lines as $line) {
    if (strpos($line, '=') === false || $line[0] === '#') continue;
    [$key, $value] = explode('=', $line, 2);
    $env[trim($key)] = trim($value, " \t\n\r\0\x0B\"';");
}

$url = addslashes($env['SUPABASE_URL'] ?? '');

echo "window.__ENV__ = { SUPABASE_URL: \"{$url}\" };";
?>
