// Mapeia as variáveis do env.php para o objeto CONFIG esperado pelos scripts
const CONFIG = {
  SUPABASE_URL: window.__ENV__?.SUPABASE_URL || '',
  SUPABASE_KEY: window.__ENV__?.SUPABASE_KEY || ''
};
