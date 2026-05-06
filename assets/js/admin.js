// ============================================================
// ESTADO
// ============================================================
const TOKEN_KEY = 'admin_token';
const TOKEN_EXPIRE_KEY = `${TOKEN_KEY}_expires`;

function getSavedToken() {
  const sessionToken = sessionStorage.getItem(TOKEN_KEY);
  if (sessionToken) return sessionToken;

  const savedToken = localStorage.getItem(TOKEN_KEY);
  const expiresAt = Number(localStorage.getItem(TOKEN_EXPIRE_KEY));
  if (savedToken && expiresAt && expiresAt > Date.now()) {
    sessionStorage.setItem(TOKEN_KEY, savedToken);
    return savedToken;
  }

  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRE_KEY);
  return null;
}

let tokenAdmin     = getSavedToken();
let todosProdutos  = [];
let catFiltroAtiva = 'todas';
let formAberto     = true;
let debounceTimer  = null;

// ============================================================
// TEMA
// ============================================================
const html        = document.documentElement;
const toggleTheme = document.getElementById('toggleTheme');
const THEME_KEY   = 'theme';

function updateThemeIcon() {
  const icon = toggleTheme.querySelector('i');
  const dark = html.getAttribute('data-theme') === 'dark';
  icon.classList.toggle('bi-sun',  !dark);
  icon.classList.toggle('bi-moon',  dark);
}

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === 'dark') html.setAttribute('data-theme', 'dark');
updateThemeIcon();

toggleTheme.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
  updateThemeIcon();
});

// Scroll do header
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ============================================================
// HELPERS HTTP
// ============================================================
async function supabaseFetch(path, options = {}) {
  const url = 'supabase-proxy.php?action=fetch&path=' + encodeURIComponent(path);
  const { headers: extraHeaders, ...restOptions } = options;
  const headers = {
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
    ...(extraHeaders || {})
  };
  if (tokenAdmin) {
    headers.Authorization = `Bearer ${tokenAdmin}`;
  }
  const res = await fetch(url, {
    ...restOptions,
    headers
  });
  return res;
}

// ============================================================
// LOGIN / LOGOUT
// ============================================================
function fazerLogout() {
  tokenAdmin = null;
  todosProdutos = [];
  sessionStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRE_KEY);
  window.location.href = 'admin-login.html';
}

if (!tokenAdmin && window.location.pathname.endsWith('admin.html')) {
  window.location.href = 'admin-login.html';
} else if (tokenAdmin && window.location.pathname.endsWith('admin.html')) {
  requestAnimationFrame(() => requestAnimationFrame(() => carregarProdutos()));
}

// ============================================================
// CARREGAR PRODUTOS — busca do banco, mostra spinner só na 1ª vez
// ============================================================
async function carregarProdutos(mostrarSpinner = true) {
  if (mostrarSpinner) {
    document.getElementById('listaProdutos').innerHTML =
      '<div class="loading-row"><div class="spinner"></div> Carregando...</div>';
  }
  try {
    const res = await supabaseFetch('/rest/v1/produtos?order=nome.asc');
    const dados = await res.json();
    // Garante que recebemos um array — se der erro o Supabase retorna objeto
    todosProdutos = Array.isArray(dados) ? dados : [];
    if (!Array.isArray(dados)) {
      console.error('Supabase retornou erro:', dados);
      mostrarToast('Erro ao carregar: ' + (dados.message || 'resposta inválida'), 'erro');
    }
  } catch(e) {
    console.error('Fetch error:', e);
    mostrarToast('Erro de conexão ao carregar produtos.', 'erro');
    todosProdutos = [];
  }
  atualizarStats();
  renderizarCategorias();
  filtrarLista();
}

// Atualiza a lista localmente sem buscar o banco de novo
function atualizarListaLocal(produto, operacao) {
  if (operacao === 'add') {
    todosProdutos.push(produto);
    todosProdutos.sort((a,b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  } else if (operacao === 'update') {
    const idx = todosProdutos.findIndex(p => p.id === produto.id);
    if (idx !== -1) todosProdutos[idx] = produto;
  } else if (operacao === 'delete') {
    todosProdutos = todosProdutos.filter(p => p.id !== produto);
  }
  atualizarStats();
  renderizarCategorias();
  filtrarLista();
}

// ============================================================
// ESTATÍSTICAS
// ============================================================
function atualizarStats() {
  const total  = todosProdutos.length;
  const ativos = todosProdutos.filter(p => p.ativo).length;
  const cats   = new Set(todosProdutos.map(p => p.categoria)).size;
  const marcas = new Set(todosProdutos.map(p => p.marca).filter(Boolean)).size;

  ['statTotal','sb-total'].forEach(id => {
    const el = document.getElementById(id); if (el) el.textContent = total;
  });
  ['statAtivos','sb-ativos'].forEach(id => {
    const el = document.getElementById(id); if (el) el.innerHTML = `<span>${ativos}</span>`;
  });
  const sc = document.getElementById('statCats');   if(sc) sc.textContent = cats;
  const sbc = document.getElementById('sb-cats');   if(sbc) sbc.textContent = cats;
  const sbm = document.getElementById('sb-marcas'); if(sbm) sbm.textContent = marcas;
}

// ============================================================
// CATEGORIAS SIDEBAR — só re-renderiza quando necessário
// ============================================================
function renderizarCategorias() {
  const cats = {};
  todosProdutos.forEach(p => { cats[p.categoria] = (cats[p.categoria] || 0) + 1; });
  const total = todosProdutos.length;

  let out = `<button class="filtro-cat-btn ${catFiltroAtiva === 'todas' ? 'ativo' : ''}" onclick="filtrarPorCat('todas')">Todas <span class="badge-count">${total}</span></button>`;
  Object.entries(cats).sort((a,b) => a[0].localeCompare(b[0],'pt-BR')).forEach(([cat, qtd]) => {
    out += `<button class="filtro-cat-btn ${catFiltroAtiva === cat ? 'ativo' : ''}" onclick="filtrarPorCat('${cat}')">${cat} <span class="badge-count">${qtd}</span></button>`;
  });
  document.getElementById('filtroCategoriasAdmin').innerHTML = out;
}

function filtrarPorCat(cat) {
  catFiltroAtiva = cat;
  // Atualiza só o botão ativo sem re-renderizar tudo
  document.querySelectorAll('.filtro-cat-btn').forEach(btn => {
    const label = btn.textContent.trim().split(' ')[0];
    btn.classList.toggle('ativo',
      (cat === 'todas' && label === 'Todas') || btn.getAttribute('onclick').includes(`'${cat}'`)
    );
  });
  filtrarLista();
}

// ============================================================
// FILTRAR — com debounce na busca
// ============================================================
function filtrarLista() {
  const busca = (document.getElementById('buscaSidebar').value || '').toLowerCase().trim();
  const sort  = document.getElementById('adminSort').value;

  let lista = todosProdutos.filter(p => {
    const okCat  = catFiltroAtiva === 'todas' || p.categoria === catFiltroAtiva;
    const texto  = `${p.nome} ${p.cat_label} ${p.marca || ''}`.toLowerCase();
    return okCat && (!busca || texto.includes(busca));
  });

  if (sort === 'az')      lista.sort((a,b) => a.nome.localeCompare(b.nome,'pt-BR'));
  else if (sort === 'za') lista.sort((a,b) => b.nome.localeCompare(a.nome,'pt-BR'));
  else if (sort === 'cat') lista.sort((a,b) => a.categoria.localeCompare(b.categoria,'pt-BR'));
  else if (sort === 'recente') lista.sort((a,b) => new Date(b.criado_em) - new Date(a.criado_em));

  document.getElementById('qtdExibidos').textContent = lista.length;
  renderizarLista(lista);
}

// Debounce na busca — evita re-render a cada tecla
const buscaSidebar = document.getElementById('buscaSidebar');
if (buscaSidebar) {
  buscaSidebar.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filtrarLista, 250);
  });
}

// ============================================================
// RENDERIZAR LISTA — DocumentFragment + lazy images
// ============================================================
function renderizarLista(lista) {
  const container = document.getElementById('listaProdutos');

  if (!lista.length) {
    container.innerHTML = '<div class="empty-state"><i class="bi bi-inbox"></i><h3>Nenhum produto encontrado</h3><p>Tente mudar o filtro ou a busca.</p></div>';
    return;
  }

  // Monta tudo fora do DOM e insere de uma vez — sem reflow por item
  const frag = document.createDocumentFragment();
  lista.forEach(p => {
    const row = document.createElement('div');
    row.className = 'produto-row';
    row.dataset.id = p.id;
    row.innerHTML = `
      <img class="row-img" src="${p.img || ''}" alt="${p.nome}" loading="lazy"
        onerror="this.style.background='var(--cinza-claro)';this.removeAttribute('src')">
      <div class="row-info">
        <strong>${p.nome}</strong>
        <span>${p.variedade ? p.variedade.substring(0,55) + '...' : '—'}</span>
      </div>
      <div><span class="row-cat">${p.cat_label || p.categoria}</span></div>
      <div class="row-marca">${p.marca || '—'}</div>
      <div class="row-status">
        <span class="status-badge ${p.ativo ? 'ativo' : 'inativo'}">${p.ativo ? 'Ativo' : 'Inativo'}</span>
      </div>
      <div class="row-acoes">
        <button class="btn btn-secondary btn-sm" data-acao="editar" title="Editar"><i class="bi bi-pencil"></i></button>
        <button class="btn btn-danger btn-sm" data-acao="deletar" data-nome="${(p.nome||'').replace(/"/g,'&quot;')}" title="Remover"><i class="bi bi-trash3"></i></button>
      </div>`;
    frag.appendChild(row);
  });

  container.innerHTML = '';
  container.appendChild(frag);
}

// Delegação de eventos — um único listener para todos os botões da lista
const listaProdutosEl = document.getElementById('listaProdutos');
if (listaProdutosEl) {
  listaProdutosEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-acao]');
    if (!btn) return;
    const row = btn.closest('.produto-row');
    if (!row) return;
    const id   = row.dataset.id;
    const acao = btn.dataset.acao;
    if (acao === 'editar')  editarProduto(id);
    if (acao === 'deletar') confirmarDelete(id, btn.dataset.nome);
  });
}

// ============================================================
// SALVAR (novo ou editar)
// ============================================================
async function salvarProduto() {
  const id     = document.getElementById('produtoId').value;
  const btn    = document.getElementById('btnSalvar');
  const nome   = document.getElementById('fNome').value.trim();
  const cat    = document.getElementById('fCategoria').value.trim();
  const catLbl = document.getElementById('fCatLabel').value.trim();

  let temErro = false;
  ['fNome','fCategoria','fCatLabel'].forEach(fid => {
    const el = document.getElementById(fid);
    const vazio = !el.value.trim();
    el.classList.toggle('erro', vazio);
    if (vazio) temErro = true;
  });
  if (temErro) { mostrarToast('Preencha os campos obrigatórios.', 'erro'); return; }

  const payload = {
    nome, categoria: cat, cat_label: catLbl,
    origem:    document.getElementById('fOrigem').value,
    badge:     document.getElementById('fBadge').value,
    marca:     document.getElementById('fMarca').value.trim(),
    img:       document.getElementById('fImg').value.trim(),
    variedade: document.getElementById('fVariedade').value.trim(),
    attrs:     document.getElementById('fAttrs').value.split(',').map(a => a.trim()).filter(Boolean),
    info: {
      Sazonalidade: document.getElementById('fSazonalidade').value.trim(),
      Calibre:      document.getElementById('fCalibre').value.trim(),
      Embalagem:    document.getElementById('fEmbalagem').value.trim(),
      Origem:       document.getElementById('fOrigemRegiao').value.trim()
    },
    ativo: document.getElementById('fAtivo').checked
  };

  btn.disabled = true;
  btn.innerHTML = '<div class="spinner" style="width:16px;height:16px;border-width:2px"></div> Salvando...';

  const url    = id ? `/rest/v1/produtos?id=eq.${id}` : '/rest/v1/produtos';
  const method = id ? 'PATCH' : 'POST';

  try {
    const res = await supabaseFetch(url, { method, body: JSON.stringify(payload) });
    if (res.ok) {
      const [salvo] = await res.json();
      mostrarToast(id ? 'Produto atualizado!' : 'Produto adicionado!', 'sucesso');
      limparForm();
      if (salvo) atualizarListaLocal(salvo, id ? 'update' : 'add');
      else await carregarProdutos(false);
    } else {
      const err = await res.json().catch(() => ({}));
      mostrarToast('Erro ao salvar: ' + (err.message || res.status), 'erro');
    }
  } catch(e) {
    mostrarToast('Erro de conexão.', 'erro');
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="bi bi-check-lg"></i> Salvar produto';
  }
}

// ============================================================
// EDITAR
// ============================================================
function editarProduto(id) {
  const p = todosProdutos.find(x => x.id === id);
  if (!p) return;

  document.getElementById('produtoId').value     = p.id;
  document.getElementById('fNome').value         = p.nome || '';
  document.getElementById('fMarca').value        = p.marca || '';
  document.getElementById('fCategoria').value    = p.categoria || '';
  document.getElementById('fCatLabel').value     = p.cat_label || '';
  document.getElementById('fOrigem').value       = p.origem || 'nacional';
  document.getElementById('fBadge').value        = p.badge || 'Nacional';
  document.getElementById('fImg').value          = p.img || '';
  document.getElementById('fVariedade').value    = p.variedade || '';
  document.getElementById('fAttrs').value        = (p.attrs || []).join(', ');
  document.getElementById('fSazonalidade').value = p.info?.Sazonalidade || '';
  document.getElementById('fCalibre').value      = p.info?.Calibre || '';
  document.getElementById('fEmbalagem').value    = p.info?.Embalagem || '';
  document.getElementById('fOrigemRegiao').value = p.info?.Origem || '';
  document.getElementById('fAtivo').checked      = p.ativo !== false;

  atualizarPreview();
  document.getElementById('formTitulo').innerHTML = `<i class="bi bi-pencil"></i> Editando: ${p.nome}`;
  if (!formAberto) toggleForm();
  document.querySelector('.form-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
// DELETAR
// ============================================================
let deletarIdPendente = null;

function confirmarDelete(id, nome) {
  deletarIdPendente = id;
  document.getElementById('confirmMsg').textContent =
    `Tem certeza que deseja remover "${nome}"? Esta ação não pode ser desfeita.`;
  document.getElementById('modalConfirm').classList.add('show');
}

function fecharConfirm() {
  deletarIdPendente = null;
  document.getElementById('modalConfirm').classList.remove('show');
}

document.getElementById('btnConfirmOk').addEventListener('click', async () => {
  if (!deletarIdPendente) return;
  const id = deletarIdPendente;
  fecharConfirm();
  try {
    const res = await supabaseFetch(`/rest/v1/produtos?id=eq.${id}`, { method: 'DELETE' });
    if (res.ok) {
      mostrarToast('Produto removido.', 'info');
      atualizarListaLocal(id, 'delete');
    } else {
      mostrarToast('Erro ao remover.', 'erro');
    }
  } catch(e) {
    mostrarToast('Erro de conexão.', 'erro');
  }
});

// ============================================================
// FORM — limpar / preview / colapsar
// ============================================================
function limparForm() {
  document.getElementById('produtoId').value = '';
  ['fNome','fMarca','fCategoria','fCatLabel','fImg','fVariedade',
   'fAttrs','fSazonalidade','fCalibre','fEmbalagem','fOrigemRegiao'].forEach(id => {
    const el = document.getElementById(id);
    el.value = '';
    el.classList.remove('erro');
  });
  document.getElementById('fOrigem').value   = 'nacional';
  document.getElementById('fBadge').value    = 'Nacional';
  document.getElementById('fAtivo').checked  = true;
  document.getElementById('formTitulo').innerHTML = '<i class="bi bi-plus-circle"></i> Novo Produto';
  document.getElementById('formStatus').textContent = '';
  document.getElementById('imgPreview').style.display = 'none';
}

function atualizarPreview() {
  const url = document.getElementById('fImg').value.trim();
  const img = document.getElementById('imgPreview');
  if (url) {
    img.src = url;
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }
}

function toggleForm() {
  formAberto = !formAberto;
  document.getElementById('formBody').classList.toggle('oculto', !formAberto);
  document.getElementById('btnColapsar').classList.toggle('colapsado', !formAberto);
}

// ============================================================
// TOAST
// ============================================================
function mostrarToast(msg, tipo = 'info') {
  const icons = { sucesso: 'bi-check-circle-fill', erro: 'bi-x-circle-fill', info: 'bi-info-circle-fill' };
  const toast = document.createElement('div');
  toast.className = `toast ${tipo}`;
  toast.innerHTML = `<i class="bi ${icons[tipo] || icons.info}"></i> ${msg}`;
  document.getElementById('toastContainer').appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// ============================================================
// EVENTOS GLOBAIS
// ============================================================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') fecharConfirm();
});

document.getElementById('modalConfirm').addEventListener('click', e => {
  if (e.target === document.getElementById('modalConfirm')) fecharConfirm();
});

['fNome','fCategoria','fCatLabel'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input', function() { this.classList.remove('erro'); });
  }
});
