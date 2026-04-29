// script.js – ajustado com checagens de DOM

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;

  // ======= TEMA =======
  // Support multiple toggle elements (in case markup is duplicated)
  const toggleThemeBtns = document.querySelectorAll('#toggleTheme');
  const savedTheme = localStorage.getItem('theme');

  const setIcon = (btn, dark) => {
    if (!btn) return;
    btn.classList.toggle('bi-sun', !dark);
    btn.classList.toggle('bi-moon', dark);
  };

  if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    toggleThemeBtns.forEach(btn => setIcon(btn, true));
  } else {
    html.removeAttribute('data-theme');
    toggleThemeBtns.forEach(btn => setIcon(btn, false));
  }

  toggleThemeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const isDark = html.getAttribute('data-theme') === 'dark';
      if (isDark) {
        html.removeAttribute('data-theme');
        toggleThemeBtns.forEach(b => setIcon(b, false));
        localStorage.setItem('theme', 'light');
      } else {
        html.setAttribute('data-theme', 'dark');
        toggleThemeBtns.forEach(b => setIcon(b, true));
        localStorage.setItem('theme', 'dark');
      }
    });
  });

  // ======= SCROLLSPY =======
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('a.menu-link[href^="#"]');
  const header = document.getElementById('header');

  function onScroll() {
    const offset = (header ? header.offsetHeight : 100) + 10;
    const scrollY = window.scrollY + offset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove("active"));
        const targetLink = document.querySelector(`a.menu-link[href="#${sectionId}"]`);
        if (targetLink) targetLink.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();

  // ======= MENU MOBILE =======
  const menuHamburger = document.getElementById('menuHamburger');
  const menuMobile = document.getElementById('menuMobile');

  if (menuHamburger && menuMobile) {
    menuHamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      menuMobile.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
      if (
        menuMobile.classList.contains('active') &&
        !menuMobile.contains(e.target) &&
        e.target !== menuHamburger
      ) {
        menuMobile.classList.remove('active');
      }
    });

    menuMobile.querySelectorAll('.menu-link').forEach(link => {
      link.addEventListener('click', () => menuMobile.classList.remove('active'));
    });
  }

  // ======= CONTATO =======
  const form = document.getElementById("formContato");
  if (form) {
    const emailInput = document.getElementById("email");
    const telInput = document.getElementById("telefone");
    const emailError = document.getElementById("emailError");
    const telError = document.getElementById("telError");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

    // validação local
    form.addEventListener("submit", function (e) {
      let valid = true;

      if (!emailRegex.test(emailInput?.value.trim() || '')) {
        emailInput?.classList.add("error");
        if (emailError) {
          emailError.style.display = "block";
          emailError.textContent = "Digite um e-mail válido (ex: usuario@dominio.com)";
        }
        valid = false;
      } else {
        emailInput?.classList.remove("error");
        if (emailError) emailError.style.display = "none";
      }

      if (!telRegex.test(telInput?.value.trim() || '')) {
        telInput?.classList.add("error");
        if (telError) {
          telError.style.display = "block";
          telError.textContent = "Digite um telefone válido (ex: (11) 91234-5678)";
        }
        valid = false;
      } else {
        telInput?.classList.remove("error");
        if (telError) telError.style.display = "none";
      }

      if (!valid) e.preventDefault();
    });

    // máscara de telefone
    if (telInput) {
      telInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length <= 10) {
          value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
        } else {
          value = value.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
        }
        e.target.value = value;
      });
    }

    // envio via Formspree
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      let valid = true;

      if (!emailRegex.test(emailInput?.value.trim() || '')) {
        emailInput?.classList.add("error");
        if (emailError) {
          emailError.style.display = "block";
          emailError.textContent = "Digite um e-mail válido (ex: usuario@dominio.com)";
        }
        valid = false;
      } else {
        emailInput?.classList.remove("error");
        if (emailError) emailError.style.display = "none";
      }

      if (telInput?.value.trim() && !telRegex.test(telInput.value.trim())) {
        telInput.classList.add("error");
        if (telError) {
          telError.style.display = "block";
          telError.textContent = "Digite um telefone válido (ex: (11) 91234-5678)";
        }
        valid = false;
      } else {
        telInput?.classList.remove("error");
        if (telError) telError.style.display = "none";
      }

      if (!valid) return;

      try {
        const endpoint = form.getAttribute("action");
        const data = Object.fromEntries(new FormData(form));
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        const formAlert = document.getElementById("formAlert");
        if (response.ok) {
          if (formAlert) {
            formAlert.textContent = "Mensagem enviada com sucesso!";
            formAlert.style.color = "green";
          }
          form.reset();
        } else {
          if (formAlert) {
            formAlert.textContent = "Erro ao enviar. Tente novamente.";
            formAlert.style.color = "red";
          }
        }
      } catch (err) {
        console.error(err);
        const formAlert = document.getElementById("formAlert");
        if (formAlert) {
          formAlert.textContent = "Ocorreu um erro inesperado.";
          formAlert.style.color = "red";
        }
      }
    });
  }
});
