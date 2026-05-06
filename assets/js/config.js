// Mapeia as variáveis do env.php para o objeto CONFIG esperado pelos scripts
// Fallback para quando o env.php não é processado (ex: Live Server local)
const FALLBACK_ENV = {
  SUPABASE_URL: "https://shtgxnjzwaosbhwzlqct.supabase.co"
};

window.CONFIG = {
  get SUPABASE_URL() {
    return (window.__ENV__ && window.__ENV__.SUPABASE_URL)
      ? window.__ENV__.SUPABASE_URL
      : FALLBACK_ENV.SUPABASE_URL;
  }
};
