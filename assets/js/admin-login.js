const SUPABASE_URL = CONFIG.SUPABASE_URL;
const SUPABASE_KEY = CONFIG.SUPABASE_KEY;
const TOKEN_KEY = 'admin_token';
const TOKEN_EXPIRE_KEY = `${TOKEN_KEY}_expires`;

const btnLogin = document.getElementById('btnLogin');
const loginErro = document.getElementById('loginErro');
const loginEmail = document.getElementById('loginEmail');
const loginSenha = document.getElementById('loginSenha');
const togglePassword = document.getElementById('togglePassword');

function loadLoginState() {
  const savedToken = localStorage.getItem(TOKEN_KEY);
  const expiresAt = Number(localStorage.getItem(TOKEN_EXPIRE_KEY));

  if (savedToken && expiresAt && expiresAt > Date.now()) {
    sessionStorage.setItem(TOKEN_KEY, savedToken);
    window.location.href = 'admin.html';
  } else {
    clearSavedLogin();
  }
}

function clearSavedLogin() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRE_KEY);
}

function saveLoginState(token) {
  sessionStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(TOKEN_EXPIRE_KEY, String(Date.now() + 60 * 60 * 1000));
}

function togglePasswordVisibility() {
  const hidden = loginSenha.type === 'password';
  loginSenha.type = hidden ? 'text' : 'password';
  togglePassword.innerHTML = `<i class="bi ${hidden ? 'bi-eye-slash' : 'bi-eye'}"></i>`;
  togglePassword.setAttribute('aria-label', hidden ? 'Ocultar senha' : 'Mostrar senha');
}

async function fazerLogin() {
  const email = loginEmail.value.trim();
  const senha = loginSenha.value;

  if (!email || !senha) {
    mostrarErro('Preencha email e senha.');
    return;
  }

  btnLogin.disabled = true;
  btnLogin.innerHTML = '<div class="spinner" style="width:16px;height:16px;border-width:2px"></div> Entrando...';
  loginErro.style.display = 'none';

  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_KEY },
      body: JSON.stringify({ email, password: senha })
    });

    const dados = await res.json();

    if (dados.access_token) {
      saveLoginState(dados.access_token);
      window.location.href = 'admin.html';
    } else {
      mostrarErro('Email ou senha incorretos.');
    }
  } catch (e) {
    mostrarErro('Erro de conexão. Tente novamente.');
  } finally {
    btnLogin.disabled = false;
    btnLogin.innerHTML = '<i class="bi bi-box-arrow-in-right"></i> Entrar';
  }
}

function mostrarErro(msg) {
  loginErro.textContent = msg;
  loginErro.style.display = 'flex';
}

btnLogin.addEventListener('click', fazerLogin);
togglePassword.addEventListener('click', togglePasswordVisibility);
loadLoginState();
