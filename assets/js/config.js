window.CONFIG = {
  get SUPABASE_URL() {
    return (window.__ENV__ && window.__ENV__.SUPABASE_URL)
      ? window.__ENV__.SUPABASE_URL
      : FALLBACK_ENV.SUPABASE_URL;
  }
};
