// produtos.js (versão robusta com busca normalize + lazy + selos)
(() => {
  const PLACEHOLDER_1x1 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

  async function fetchProductsJson(url = './data/products.json') {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Erro ao carregar products.json: ' + res.status);
    return await res.json();
  }

  function escapeHtml(text = '') {
    return String(text)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  // normaliza string: remove acentos e deixa minúscula
  function normalize(str = '') {
    return String(str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function buildCard(item) {
    const article = document.createElement('article');
    article.className = 'produto-card';
    article.dataset.slug = item.slug || '';

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'produto-img-wrapper';

    // imagem principal (lazy)
    const imgMain = document.createElement('img');
    imgMain.className = 'produto-img lazy';
    imgMain.loading = 'lazy';
    imgMain.alt = escapeHtml(item.alt || item.title || '');
    imgMain.src = PLACEHOLDER_1x1;
    imgMain.dataset.src = item.image || item.imagem || '';
    imgWrapper.appendChild(imgMain);

    
    article.appendChild(imgWrapper);

    const h3 = document.createElement('h3');
    h3.className = 'produto-titulo';
    h3.innerText = item.title || item.titulo || '';
    article.appendChild(h3);

    const p = document.createElement('p');
    p.className = 'produto-texto';
    p.innerText = item.description || item.descricao || '';
    article.appendChild(p);

    const btn = document.createElement('button');
    btn.className = 'btn btn-primario btn-ver-mais';
    // ação do botão: abre o modal (evita que o click no botão dispare duas vezes via propagation)
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (typeof window.abrirModal === 'function') {
        window.abrirModal(item.slug || '');
      }
    });
    btn.innerHTML = `<span class="btn-texto">Ver mais</span> <i class="bi bi-search"></i>`;
    article.appendChild(btn);

    // tornar o card inteiro clicável para abrir o modal (aponta para a mesma slug)
    article.addEventListener('click', function () {
      if (typeof window.abrirModal === 'function') {
        window.abrirModal(item.slug || '');
      }
    });

    return article;
  }

  function loadImageElement(img) {
    if (!img) return;
    const src = img.dataset.src;
    const srcset = img.dataset.srcset;
    if (src) img.src = src;
    if (srcset) img.srcset = srcset;
    img.classList.remove('lazy');
  }

  function setupLazyLoader(opts = {}) {
    const rootMargin = opts.rootMargin || '300px 0px';
    const threshold = opts.threshold || 0.01;

    const lazyImages = Array.from(document.querySelectorAll('img.lazy[data-src]'));
    const lazyBg = Array.from(document.querySelectorAll('.lazy-bg[data-bg]'));

    if ('IntersectionObserver' in window && lazyImages.length + lazyBg.length > 0) {
      const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImageElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin, threshold });

      lazyImages.forEach(img => imgObserver.observe(img));

      if (lazyBg.length > 0) {
        const bgObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const bg = el.dataset.bg;
              if (bg) {
                el.style.backgroundImage = `url('${bg}')`;
                el.classList.remove('lazy-bg');
              }
              observer.unobserve(el);
            }
          });
        }, { rootMargin: '500px 0px', threshold: 0.01 });

        lazyBg.forEach(el => bgObserver.observe(el));
      }

    } else {
      lazyImages.forEach(loadImageElement);
      lazyBg.forEach(el => {
        const bg = el.dataset.bg;
        if (bg) {
          el.style.backgroundImage = `url('${bg}')`;
          el.classList.remove('lazy-bg');
        }
      });
    }
  }

  // renderiza um array de produtos no grid
  function renderGridFromArray(productsArray = []) {
    const container = document.getElementById('produtos-grid') || document.querySelector('.grid-produtos');
    if (!container) return;
    container.innerHTML = '';
    productsArray.forEach(p => container.appendChild(buildCard(p)));
    setupLazyLoader({ rootMargin: '300px 0px' });
  }

  // carrega JSON, popula window.PRODUCTS_DATA, window.produtosData (para modal) e renderiza
  async function renderProductGrid(opts = {}) {
    const container = document.getElementById('produtos-grid') || document.querySelector('.grid-produtos');
    if (!container) {
      console.warn('Container de produtos não encontrado. Coloque <div class="grid-produtos" id="produtos-grid"></div>');
      return [];
    }

    try {
      const products = await fetchProductsJson(opts.url || './data/products.json');

      window.PRODUCTS_DATA = products; // manter array bruto

      // transforma dados para o modal (agrupado)
      window.produtosData = {};
      products.forEach(item => {
        const key = (item.slug || item.categoria || 'geral').toString();
        const prodForModal = {
          titulo: item.title || item.titulo || '',
          descricao: item.description || item.descricao || '',
          imagem: item.image || item.imagem || '',
          impactCharacters: []
        };

        if (Array.isArray(item.selos) && item.selos.length) {
          item.selos.forEach(sname => {
            prodForModal.impactCharacters.push({ img: `./assets/svg/selos/${sname}.webp`, texto: sname });
          });
        } else if (item.selo) {
          const sname = item.selo === true ? 'rei' : String(item.selo);
          prodForModal.impactCharacters.push({ img: `./assets/svg/selos/${sname}.webp`, texto: sname });
        }

        if (!window.produtosData[key]) window.produtosData[key] = [];
        window.produtosData[key].push(prodForModal);
      });

      const visibleProducts = products.filter(p => p.visible !== false);
      renderGridFromArray(visibleProducts);

      return products;
    } catch (err) {
      console.error(err);
      if (container) container.innerHTML = '<p>Erro ao carregar produtos. Veja o console do navegador.</p>';
      return [];
    }
  }

  // inicializa e garante que a busca só seja registrada depois que PRODUCTS_DATA existir
  document.addEventListener('DOMContentLoaded', async () => {
    try {
      await renderProductGrid({ url: './data/products.json' });
    } catch (e) {
      console.error('Erro na inicialização do grid:', e);
    }

    // setup busca (usa window.PRODUCTS_DATA)
    const inputBusca = document.getElementById('buscaProduto');
    const container = document.getElementById('produtos-grid') || document.querySelector('.grid-produtos');

    if (inputBusca && container) {
      inputBusca.addEventListener('input', (e) => {
        const termo = normalize(e.target.value || '');
        const todos = (window.PRODUCTS_DATA || []).filter(p => p.visible !== false);

        if (!termo) {
          renderGridFromArray(todos);
          return;
        }

        const filtrados = todos.filter(p => {
          const titulo = normalize(p.title || p.titulo || '');

          // match direto
          if (titulo.includes(termo)) return true;

          // checa plural ↔ singular
          if (termo.endsWith('s')) {
            const singular = termo.slice(0, -1);
            if (titulo.includes(singular)) return true;
          } else if (termo.length > 2) {
            const plural = termo + 's';
            if (titulo.includes(plural)) return true;
          }

          // checa também com acentos removidos (já está normalizado, mas reforço)
          if (normalize(titulo).includes(normalize(termo))) return true;

          return false;
        });
        const msgNaoEncontrado = document.getElementById('mensagemNaoEncontrado');
        if (msgNaoEncontrado) {
          msgNaoEncontrado.style.display = filtrados.length === 0 ? 'block' : 'none';
        }
        renderGridFromArray(filtrados);
      });
    }
  });

  // expor funções para depuração no console, sem poluir namespace (opcional)
  window._FRUTAMINA_DEBUG = {
    renderGridFromArray,
    renderProductGrid,
    fetchProductsJson,
    normalize
  };
})();
