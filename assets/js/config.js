// Mapeia as variáveis do env.php para o objeto CONFIG esperado pelos scripts
window.CONFIG = {
  get SUPABASE_URL() { return window.__ENV__?.SUPABASE_URL || ''; },
  get SUPABASE_KEY() { return window.__ENV__?.SUPABASE_KEY || ''; }
};
