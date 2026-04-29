    const header = document.getElementById('header');
    const menuMobile = document.getElementById('menuMobile');
    const overlayMobile = document.getElementById('overlayMobile');
    const menuHamburger = document.getElementById('menuHamburger');
    const btnFecharMobile = document.getElementById('btnFecharMobile');
    const toggleTheme = document.getElementById('toggleTheme');
    const desktopLinks = document.querySelectorAll('.menu-desktop .menu-link');
    const mobileLinks = document.querySelectorAll('#menuMobile .menu-link');
    const html = document.documentElement;
    const THEME_STORAGE_KEY = 'theme';

    function onScrollHeader() {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }
    onScrollHeader();
    window.addEventListener('scroll', onScrollHeader);

    function abrirMenu() {
      menuMobile.classList.add('active');
      overlayMobile.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function fecharMenu() {
      menuMobile.classList.remove('active');
      overlayMobile.classList.remove('active');
      document.body.style.overflow = '';
    }

    menuHamburger.addEventListener('click', abrirMenu);
    btnFecharMobile.addEventListener('click', fecharMenu);
    overlayMobile.addEventListener('click', fecharMenu);
    mobileLinks.forEach((link) => link.addEventListener('click', fecharMenu));

    const observerTargets = document.querySelectorAll('section[id], main[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        desktopLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      });
    }, { threshold: 0.4 });
    observerTargets.forEach((target) => observer.observe(target));

    function updateThemeIcon() {
      const icon = toggleTheme.querySelector('i');
      const dark = html.getAttribute('data-theme') === 'dark';
      icon.classList.toggle('bi-sun', !dark);
      icon.classList.toggle('bi-moon', dark);
    }

    function getSavedTheme() {
      try {
        const theme = localStorage.getItem(THEME_STORAGE_KEY);
        return theme === 'dark' || theme === 'light' ? theme : null;
      } catch (error) {
        return null;
      }
    }

    function saveTheme(theme) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch (error) {
        // localStorage pode estar indisponível em alguns contextos
      }
    }

    const savedTheme = getSavedTheme();
    if (savedTheme) {
      html.setAttribute('data-theme', savedTheme);
    }

    toggleTheme.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', nextTheme);
      saveTheme(nextTheme);
      updateThemeIcon();
    });
    updateThemeIcon();

    const form = document.getElementById('formContato');
    const formAlert = document.getElementById('formAlert');
    const btnEnviar = document.getElementById('btnEnviar');
    const btnEnviarIcon = btnEnviar.querySelector('i');
    const btnEnviarText = btnEnviar.querySelector('span');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      formAlert.className = 'form-alert';
      formAlert.textContent = '';

      btnEnviar.disabled = true;
      btnEnviarText.textContent = 'Enviando...';
      btnEnviarIcon.className = 'bi bi-hourglass-split';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formAlert.classList.add('success');
          formAlert.textContent = '✓ Mensagem enviada com sucesso!';
          form.reset();
        } else {
          formAlert.classList.add('error');
          formAlert.textContent = 'Não foi possível enviar. Tente novamente em instantes.';
        }
      } catch (error) {
        formAlert.classList.add('error');
        formAlert.textContent = 'Erro de conexão. Verifique sua internet e tente novamente.';
      } finally {
        btnEnviar.disabled = false;
        btnEnviarText.textContent = 'Enviar mensagem';
        btnEnviarIcon.className = 'bi bi-send';
      }
    });
  

