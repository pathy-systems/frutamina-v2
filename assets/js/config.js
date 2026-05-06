// Mapeia as variáveis do env.php para o objeto CONFIG esperado pelos scripts
// Fallback para quando o env.php não é processado (ex: Live Server local)
const FALLBACK_ENV = {
  SUPABASE_URL: "https://shtgxnjzwaosbhwzlqct.supabase.co",
  SUPABASE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNodGd4bmp6d2Fvc2Jod3pscWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2MTAxMjcsImV4cCI6MjA5MzE4NjEyN30.RZ8zGdU9Mx1-_hIpxxIDUTBUZ1ofMoDy-e0RBfxH1YY"
};

window.CONFIG = {
  get SUPABASE_URL() { 
    return (window.__ENV__ && window.__ENV__.SUPABASE_URL) 
      ? window.__ENV__.SUPABASE_URL 
      : FALLBACK_ENV.SUPABASE_URL; 
  },
  get SUPABASE_KEY() { 
    return (window.__ENV__ && window.__ENV__.SUPABASE_KEY) 
      ? window.__ENV__.SUPABASE_KEY 
      : FALLBACK_ENV.SUPABASE_KEY; 
  }
};
