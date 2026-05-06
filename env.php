<?php
header('Content-Type: application/javascript');
header('Cache-Control: no-store, no-cache');

// Lê o arquivo .env
$lines = file('.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$env = [];
foreach ($lines as $line) {
    if (strpos($line, '=') !== false && $line[0] !== '#') {
        [$key, $value] = explode('=', $line, 2);
        $env[trim($key)] = trim($value);
    }
}

echo "window.__ENV__ = {";
echo "  SUPABASE_URL: \"" . ($env['SUPABASE_URL'] ?? '') . "\",";
echo "  SUPABASE_KEY: \"" . ($env['SUPABASE_KEY'] ?? '') . "\"";
echo "};";
?>