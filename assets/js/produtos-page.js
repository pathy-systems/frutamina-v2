

// ============================================================
// BUSCA OS PRODUTOS DO BANCO
// ============================================================
async function buscarProdutosDoSupabase() {
  const SUPABASE_URL = CONFIG.SUPABASE_URL;

  if (!SUPABASE_URL) {
    console.error('Configurações do Supabase não encontradas!');
    throw new Error('Configurações ausentes');
  }

  const res = await fetch(
    'supabase-proxy.php?action=fetch&path=' + encodeURIComponent('/rest/v1/produtos?ativo=eq.true&order=nome.asc'),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  if (!res.ok) throw new Error('Falha ao buscar produtos');

  const dados = await res.json();

  // Normaliza para o mesmo formato que o site já usa
  return dados.map(p => ({
    id: p.id,
    nome: p.nome,
    categoria: p.categoria,
    catLabel: p.cat_label,
    origem: p.origem || 'nacional',
    badge: p.badge || 'Nacional',
    marca: p.marca || '',
    img: p.img || '',
    variedade: p.variedade || '',
    attrs: Array.isArray(p.attrs) ? p.attrs : [],
    info: p.info || {},
    marcaLabel: p.marca || '',
    marcaSlug: slugify(p.marca || '')
  }));
}

// ============================================================
// VARIÁVEIS DE ESTADO
// ============================================================
let produtos = [];          // preenchido após carregar do banco
let catAtiva = 'todos';
let marcaAtiva = 'todas';
let viewAtiva = 'grid';
let busca = '';

// ============================================================
// ELEMENTOS DO DOM
// ============================================================
const inputBusca = document.getElementById('inputBusca');
const filtroLista = document.getElementById('filtroLista');
const filtroMarcaLista = document.getElementById('filtroMarcaLista');
const filtroListaWrap = document.getElementById('filtroListaWrap');
const filtroMarcaWrap = document.getElementById('filtroMarcaWrap');
const toggleCategorias = document.getElementById('toggleCategorias');
const toggleMarcas = document.getElementById('toggleMarcas');
const sortSelect = document.getElementById('sortSelect');
const grid = document.getElementById('produtosGrid');
const qtdCount = document.getElementById('qtd-count');
const btnGrid = document.getElementById('btn-grid');
const btnLista = document.getElementById('btn-lista');
const btnLimparFiltros = document.getElementById('btnLimparFiltros');
const modalOverlay = document.getElementById('modalOverlay');
const html = document.documentElement;
const menuMobile = document.getElementById('menuMobile');
const overlayMobile = document.getElementById('overlayMobile');

const THEME_STORAGE_KEY = 'theme';
const CATEGORIAS_ABERTAS_KEY = 'produtos_categorias_abertas';
const MARCAS_ABERTAS_KEY = 'produtos_marcas_abertas';
let categoriasAbertas = false;
let marcasAbertas = false;

// ============================================================
// HELPERS
// ============================================================
function slugify(texto) {
  return (texto || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function badgeClass(badge) {
  const b = (badge || '').toLowerCase();
  if (b === 'importado') return 'importado';
  if (b === 'destaque') return 'destaque';
  return 'nacional';
}

function syncBodyOverflow() {
  const opened = menuMobile.classList.contains('active') ||
    modalOverlay.classList.contains('active');
  document.body.style.overflow = opened ? 'hidden' : '';
}

// ============================================================
// TEMA
// ============================================================
function updateThemeIcon() {
  const icon = document.querySelector('#toggleTheme i');
  const dark = html.getAttribute('data-theme') === 'dark';
  icon.classList.toggle('bi-sun', !dark);
  icon.classList.toggle('bi-moon', dark);
}

function getSavedTheme() {
  try { const t = localStorage.getItem(THEME_STORAGE_KEY); return t === 'dark' || t === 'light' ? t : null; }
  catch { return null; }
}

function saveTheme(theme) {
  try { localStorage.setItem(THEME_STORAGE_KEY, theme); } catch { }
}

// ============================================================
// PAINÉIS (categorias / marcas)
// ============================================================
function getSavedPanelState(key, def = false) {
  try { const v = localStorage.getItem(key); return v === 'true' ? true : v === 'false' ? false : def; }
  catch { return def; }
}

function setPanelState({ aberta, wrapEl, toggleEl, storageKey, closedLabel, openLabel, persistir = true }) {
  if (!wrapEl || !toggleEl) return;
  wrapEl.classList.toggle('collapsed', !aberta);
  toggleEl.setAttribute('aria-expanded', String(aberta));
  toggleEl.setAttribute('aria-label', aberta ? openLabel : closedLabel);
  if (persistir) try { localStorage.setItem(storageKey, String(aberta)); } catch { }
}

function setCategoriasAbertas(abertas, persistir = true) {
  categoriasAbertas = abertas;
  setPanelState({
    aberta: abertas, wrapEl: filtroListaWrap, toggleEl: toggleCategorias,
    storageKey: CATEGORIAS_ABERTAS_KEY, closedLabel: 'Abrir categorias', openLabel: 'Fechar categorias', persistir
  });
}

function setMarcasAbertas(abertas, persistir = true) {
  marcasAbertas = abertas;
  setPanelState({
    aberta: abertas, wrapEl: filtroMarcaWrap, toggleEl: toggleMarcas,
    storageKey: MARCAS_ABERTAS_KEY, closedLabel: 'Abrir marcas', openLabel: 'Fechar marcas', persistir
  });
}

// ============================================================
// FILTROS DINÂMICOS
// ============================================================
function getCategoriasDisponiveis() {
  return Array.from(
    produtos.reduce((map, p) => {
      if (!map.has(p.categoria)) map.set(p.categoria, { slug: p.categoria, label: p.catLabel || p.categoria });
      return map;
    }, new Map()).values()
  );
}

function getMarcasDisponiveis() {
  return Array.from(
    produtos.reduce((map, p) => {
      if (p.marcaSlug && !map.has(p.marcaSlug)) map.set(p.marcaSlug, { slug: p.marcaSlug, label: p.marcaLabel });
      return map;
    }, new Map()).values()
  ).sort((a, b) => a.label.localeCompare(b.label, 'pt-BR'));
}

function buildFiltroButton({ ativo, tipo, slug, label, quantidade }) {
  return `<button class="filtro-btn${ativo ? ' active' : ''}" data-${tipo}="${slug}" type="button">
    ${label} <span class="contagem">${quantidade}</span>
  </button>`;
}

function getContagemCategorias() {
  const contagem = {};
  produtos.forEach(p => {
    if (marcaAtiva !== 'todas' && p.marcaSlug !== marcaAtiva) return;
    const texto = `${p.nome} ${p.variedade} ${p.catLabel} ${p.marcaLabel}`.toLowerCase();
    if (busca && !texto.includes(busca)) return;
    contagem[p.categoria] = (contagem[p.categoria] || 0) + 1;
  });
  return contagem;
}

function renderFiltrosCategoria() {
  const contagem = getContagemCategorias();
  const total = Object.values(contagem).reduce((acc, v) => acc + v, 0);
  filtroLista.innerHTML =
    buildFiltroButton({ ativo: catAtiva === 'todos', tipo: 'cat', slug: 'todos', label: 'Todos', quantidade: total }) +
    getCategoriasDisponiveis().map(c =>
      buildFiltroButton({ ativo: catAtiva === c.slug, tipo: 'cat', slug: c.slug, label: c.label, quantidade: contagem[c.slug] || 0 })
    ).join('');
}

function getContagemMarcas() {
  const contagem = {};
  produtos.forEach(p => {
    if (catAtiva !== 'todos' && p.categoria !== catAtiva) return;
    const texto = `${p.nome} ${p.variedade} ${p.catLabel} ${p.marcaLabel}`.toLowerCase();
    if (busca && !texto.includes(busca)) return;
    if (!p.marcaSlug) return;
    contagem[p.marcaSlug] = (contagem[p.marcaSlug] || 0) + 1;
  });
  return contagem;
}

function renderFiltrosMarca() {
  const contagem = getContagemMarcas();
  const total = produtos.filter(p => {
    if (catAtiva !== 'todos' && p.categoria !== catAtiva) return false;
    const texto = `${p.nome} ${p.variedade} ${p.catLabel} ${p.marcaLabel}`.toLowerCase();
    return busca ? texto.includes(busca) : true;
  }).length;
  filtroMarcaLista.innerHTML =
    buildFiltroButton({ ativo: marcaAtiva === 'todas', tipo: 'marca', slug: 'todas', label: 'Todas', quantidade: total }) +
    getMarcasDisponiveis().map(m =>
      buildFiltroButton({ ativo: marcaAtiva === m.slug, tipo: 'marca', slug: m.slug, label: m.label, quantidade: contagem[m.slug] || 0 })
    ).join('');
}

function getProdutosFiltrados() {
  const resultado = produtos.filter(p => {
    const okCat = catAtiva === 'todos' || p.categoria === catAtiva;
    const okMarca = marcaAtiva === 'todas' || p.marcaSlug === marcaAtiva;
    const texto = `${p.nome} ${p.variedade} ${p.catLabel} ${p.marcaLabel}`.toLowerCase();
    return okCat && okMarca && (!busca || texto.includes(busca));
  });

  const ordem = sortSelect.value;
  if (ordem === 'az') resultado.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  if (ordem === 'za') resultado.sort((a, b) => b.nome.localeCompare(a.nome, 'pt-BR'));
  if (ordem === 'cat') resultado.sort((a, b) => a.categoria.localeCompare(b.categoria, 'pt-BR'));

  return resultado;
}

// ============================================================
// RENDERIZAÇÃO
// ============================================================
function renderGrid() {
  busca = inputBusca.value.trim().toLowerCase();
  renderFiltrosCategoria();
  renderFiltrosMarca();
  const lista = getProdutosFiltrados();
  qtdCount.textContent = String(lista.length);
  grid.classList.toggle('lista', viewAtiva === 'lista');

  if (!lista.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="bi bi-search"></i>
        <h3>Nenhum produto encontrado</h3>
        <p>Não localizamos itens com os filtros atuais. Tente ajustar busca, categoria ou origem.</p>
        <button class="btn-reset" type="button" data-action="reset-filtros">
          <i class="bi bi-arrow-counterclockwise"></i> Limpar filtros
        </button>
      </div>`;
    return;
  }

  grid.innerHTML = lista.map(p => `
    <article class="produto-card" data-produto-id="${p.id}" tabindex="0" role="button" aria-label="Ver detalhes de ${p.nome}">
      <div class="card-img-wrap">
        <span class="card-badge ${badgeClass(p.badge)}">${p.badge}</span>
        <img src="${p.img}" alt="${p.nome}" loading="lazy">
      </div>
      <div class="card-body">
        <p class="card-categoria">${p.catLabel}</p>
        <h3 class="card-title">${p.nome}</h3>
        <p class="card-variedade">${p.variedade}</p>
        <div class="card-attrs">${p.attrs.map(a => `<span class="card-attr">${a}</span>`).join('')}</div>
        <div class="card-footer-row">
          <span class="card-origem"><i class="bi bi-geo-alt"></i>${p.origem === 'nacional' ? 'Nacional' : 'Importado'}</span>
          <span class="btn-detalhes">Ver detalhes <i class="bi bi-arrow-right"></i></span>
        </div>
      </div>
    </article>`).join('');
}

// ============================================================
// MODAL
// ============================================================
function abrirModal(id) {
  const p = produtos.find(item => item.id === id);
  if (!p) return;

  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalImg').alt = p.nome;

  const badge = document.getElementById('modalBadge');
  badge.textContent = p.badge;
  badge.className = `modal-badge ${badgeClass(p.badge)}`;

  document.getElementById('modalCat').textContent = p.catLabel;
  document.getElementById('modalNome').textContent = p.nome;
  document.getElementById('modalDesc').textContent = p.variedade;

  document.getElementById('modalAttrs').innerHTML = p.attrs
    .map(a => `<span class="modal-attr">${a}</span>`).join('');

  document.getElementById('modalInfo').innerHTML = Object.entries(p.info)
    .map(([k, v]) => `<div class="modal-info-item"><span>${k}</span><strong>${v}</strong></div>`).join('');

  const texto = encodeURIComponent(`Olá! Tenho interesse em ${p.nome}`);
  document.getElementById('modalWhatsapp').href = `https://wa.me/5511999589953?text=${texto}`;

  modalOverlay.classList.add('active');
  syncBodyOverflow();
}

function fecharModal(e) {
  if (!e || e.target === modalOverlay || e.target.closest('.modal-close')) {
    modalOverlay.classList.remove('active');
    syncBodyOverflow();
  }
}

// ============================================================
// MENU MOBILE
// ============================================================
function abrirMenu() { menuMobile.classList.add('active'); overlayMobile.classList.add('active'); syncBodyOverflow(); }
function fecharMenu() { menuMobile.classList.remove('active'); overlayMobile.classList.remove('active'); syncBodyOverflow(); }

function onHeaderScroll() {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 60);
}

// ============================================================
// ESTADO DE CARREGAMENTO
// ============================================================
function mostrarLoading() {
  grid.innerHTML = `
    <div style="grid-column:1/-1;text-align:center;padding:4rem 2rem;color:var(--cinza-texto)">
      <i class="bi bi-hourglass-split" style="font-size:2.5rem;display:block;margin-bottom:1rem;animation:spin 1s linear infinite"></i>
      <p style="font-size:1rem;font-weight:600">Carregando produtos...</p>
    </div>
    <style>@keyframes spin{to{transform:rotate(360deg)}}</style>`;
}

function mostrarErro() {
  grid.innerHTML = `
    <div class="empty-state" style="grid-column:1/-1">
      <i class="bi bi-wifi-off"></i>
      <h3>Não foi possível carregar</h3>
      <p>Verifique sua conexão e tente novamente.</p>
      <button class="btn-reset" onclick="inicializar()">
        <i class="bi bi-arrow-clockwise"></i> Tentar novamente
      </button>
    </div>`;
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
async function inicializar() {
  mostrarLoading();

  try {
    produtos = await buscarProdutosDoSupabase();
  } catch (err) {
    console.error('Erro ao buscar produtos:', err);
    mostrarErro();
    return;
  }

  // Tema
  const savedTheme = getSavedTheme();
  if (savedTheme) html.setAttribute('data-theme', savedTheme);
  updateThemeIcon();

  // Painéis
  setCategoriasAbertas(getSavedPanelState(CATEGORIAS_ABERTAS_KEY, false), false);
  setMarcasAbertas(getSavedPanelState(MARCAS_ABERTAS_KEY, false), false);

  // Renderiza
  renderGrid();
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.getElementById('menuHamburger').addEventListener('click', abrirMenu);
document.getElementById('btnFecharMobile').addEventListener('click', fecharMenu);
overlayMobile.addEventListener('click', fecharMenu);
document.querySelectorAll('#menuMobile .menu-link').forEach(l => l.addEventListener('click', fecharMenu));

window.addEventListener('scroll', onHeaderScroll);
onHeaderScroll();

document.getElementById('toggleTheme').addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  saveTheme(next);
  updateThemeIcon();
});

sortSelect.addEventListener('change', renderGrid);

toggleCategorias.addEventListener('click', () => setCategoriasAbertas(!categoriasAbertas));
toggleMarcas.addEventListener('click', () => setMarcasAbertas(!marcasAbertas));

filtroLista.addEventListener('click', e => {
  const btn = e.target.closest('.filtro-btn');
  if (btn) { catAtiva = btn.dataset.cat; renderGrid(); }
});

filtroMarcaLista.addEventListener('click', e => {
  const btn = e.target.closest('.filtro-btn');
  if (btn) { marcaAtiva = btn.dataset.marca; renderGrid(); }
});

btnGrid.addEventListener('click', () => { viewAtiva = 'grid'; btnGrid.classList.add('active'); btnLista.classList.remove('active'); renderGrid(); });
btnLista.addEventListener('click', () => { viewAtiva = 'lista'; btnLista.classList.add('active'); btnGrid.classList.remove('active'); renderGrid(); });
btnLimparFiltros?.addEventListener('click', () => { catAtiva = 'todos'; marcaAtiva = 'todas'; busca = ''; inputBusca.value = ''; renderGrid(); });

let debounceBusca;
inputBusca.addEventListener('input', () => {
  clearTimeout(debounceBusca);
  debounceBusca = setTimeout(renderGrid, 220);
});

grid.addEventListener('click', e => {
  if (e.target.closest('[data-action="reset-filtros"]')) {
    catAtiva = 'todos'; marcaAtiva = 'todas'; busca = ''; inputBusca.value = ''; renderGrid(); return;
  }
  const card = e.target.closest('.produto-card[data-produto-id]');
  if (card) abrirModal(card.dataset.produtoId);
});

grid.addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.produto-card[data-produto-id]');
  if (!card) return;
  e.preventDefault();
  abrirModal(card.dataset.produtoId);
});

modalOverlay.addEventListener('click', fecharModal);
document.querySelector('.modal-close')?.addEventListener('click', fecharModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharModal(); });

// ============================================================
// START
// ============================================================
inicializar();
