 // Carrossel functionality
        let currentIndex = 0;
        const track = document.getElementById('carrosselTrack');
        const cards = document.querySelectorAll('.nutricional-card');
        const totalCards = cards.length;
        let cardsPerView = getCardsPerView();

        function getCardsPerView() {
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 1024) return 2;
            return 3;
        }

        function updateCarrossel() {
            const cardWidth = cards[0].offsetWidth + 24; // card width + gap
            const offset = currentIndex * cardWidth;
            track.style.transform = `translateX(-${offset}px)`;
            updateDots();
        }

        function moverCarrossel(direction) {
            const maxIndex = totalCards - cardsPerView;
            currentIndex += direction;
            
            if (currentIndex < 0) currentIndex = maxIndex;
            if (currentIndex > maxIndex) currentIndex = 0;
            
            updateCarrossel();
        }

        function createDots() {
            const dotsContainer = document.getElementById('carrosselDots');
            // one dot for each valid position when moving one card at a time
            const maxIndex = totalCards - cardsPerView;
            const numDots = maxIndex >= 0 ? maxIndex + 1 : 1;
            
            dotsContainer.innerHTML = '';
            for (let i = 0; i < numDots; i++) {
                const dot = document.createElement('button');
                dot.className = 'dot' + (i === 0 ? ' active' : '');
                dot.onclick = () => {
                    currentIndex = i;
                    if (currentIndex > totalCards - cardsPerView) {
                        currentIndex = totalCards - cardsPerView;
                    }
                    updateCarrossel();
                };
                dotsContainer.appendChild(dot);
            }
        }

        function updateDots() {
            const dots = document.querySelectorAll('.dot');
            const activeDotIndex = currentIndex; // currentIndex corresponds to dot position now
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === activeDotIndex);
            });
        }

        // Touch/Swipe support
        let startX = 0;
        let isDragging = false;

        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });

        track.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) moverCarrossel(1);
                else moverCarrossel(-1);
            }
        });

        // Auto-play
        let autoPlayInterval = setInterval(() => moverCarrossel(1), 4000);

        track.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        track.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(() => moverCarrossel(1), 4000);
        });

        // Resize handler
        window.addEventListener('resize', () => {
            cardsPerView = getCardsPerView();
            currentIndex = 0;
            createDots();
            updateCarrossel();
        });

        // Initialize
        createDots();
        updateCarrossel();

        // ===== animation reveal when cards enter viewport =====
        function setupRevealObserver() {
                    const homeSection = document.querySelector('.home-formosa');
            const nutSection = document.querySelector('#nutricional');
            const benSection = document.querySelector('.beneficios-section');
            const dicasSection = document.querySelector('.dicas');
            const allCards = document.querySelectorAll('.nutricional-card, .beneficio-card, .dica-card');
            if (!allCards.length && !homeSection) return;

            const callback = (entries) => {
                entries.forEach(entry => {
                    if (entry.target === homeSection) {
                        if (entry.isIntersecting) {
                            homeSection.classList.add('show');
                        } else {
                            homeSection.classList.remove('show');
                        }
                    } else if (entry.target === nutSection) {
                        const nutCards = document.querySelectorAll('.nutricional-card');
                        if (entry.isIntersecting) {
                            nutCards.forEach(c => c.classList.add('show'));
                        } else {
                            nutCards.forEach(c => c.classList.remove('show'));
                        }
                    } else if (entry.target === benSection) {
                        const benCards = document.querySelectorAll('.beneficio-card');
                        if (entry.isIntersecting) {
                            benCards.forEach(c => c.classList.add('show'));
                        } else {
                            benCards.forEach(c => c.classList.remove('show'));
                        }
                    } else if (entry.target === dicasSection) {
                        const dicaCards = document.querySelectorAll('.dica-card');
                        if (entry.isIntersecting) {
                            dicaCards.forEach(c => c.classList.add('show'));
                        } else {
                            dicaCards.forEach(c => c.classList.remove('show'));
                        }
                    }
                });
            };

            const observer = new IntersectionObserver(callback, { threshold: 0.2 });
            if (homeSection) observer.observe(homeSection);
            if (nutSection) observer.observe(nutSection);
            if (benSection) observer.observe(benSection);
            if (dicasSection) observer.observe(dicasSection);
        }

        // call after DOM ready (script is deferred but ensure elements exist)
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setupRevealObserver();
                setupDicasCarousel();
                setupBenefitsCarousel();
            });
        } else {
            setupRevealObserver();
            setupDicasCarousel();
            setupBenefitsCarousel();
        }

        // ===== assistente para carrossel da seção dicas (mobile) =====
        function setupDicasCarousel() {
            const grid = document.querySelector('.dicas-grid');
            if (!grid) return;
            const cards = grid.querySelectorAll('.dica-card');
            if (!cards.length) return;

            let current = 0;
            const prevBtn = document.createElement('button');
            prevBtn.className = 'carrossel-btn dicas-prev';
            prevBtn.innerHTML = '<i class="bi bi-chevron-left"></i>';
            const nextBtn = document.createElement('button');
            nextBtn.className = 'carrossel-btn dicas-next';
            nextBtn.innerHTML = '<i class="bi bi-chevron-right"></i>';

            const dots = document.createElement('div');
            dots.className = 'carrossel-dots dicas-dots';
            cards.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'dot' + (i === 0 ? ' active' : '');
                dot.addEventListener('click', () => {
                    current = i;
                    scrollToCurrent();
                    updateDots();
                });
                dots.appendChild(dot);
            });

            grid.parentElement.insertBefore(prevBtn, grid);
            grid.parentElement.appendChild(nextBtn);
            grid.parentElement.appendChild(dots);

            function updateDots() {
                dots.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === current));
            }

            function scrollToCurrent() {
                const card = cards[current];
                card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            }

            prevBtn.addEventListener('click', () => {
                current = (current - 1 + cards.length) % cards.length;
                scrollToCurrent();
                updateDots();
            });
            nextBtn.addEventListener('click', () => {
                current = (current + 1) % cards.length;
                scrollToCurrent();
                updateDots();
            });

            function checkVisibility() {
                const show = window.innerWidth <= 768;
                prevBtn.style.display = show ? 'flex' : 'none';
                nextBtn.style.display = show ? 'flex' : 'none';
                dots.style.display = show ? 'flex' : 'none';
            }
            window.addEventListener('resize', checkVisibility);
            checkVisibility();
        }

        // ===== carousel helper for beneficios section on mobile =====
        function setupBenefitsCarousel() {
            const grid = document.querySelector('.beneficios-grid');
            if (!grid) return;
            const cards = grid.querySelectorAll('.beneficio-card');
            if (!cards.length) return;

            let current = 0;
            const prevBtn = document.createElement('button');
            prevBtn.className = 'carrossel-btn beneficios-prev';
            prevBtn.innerHTML = '<i class="bi bi-chevron-left"></i>';
            const nextBtn = document.createElement('button');
            nextBtn.className = 'carrossel-btn beneficios-next';
            nextBtn.innerHTML = '<i class="bi bi-chevron-right"></i>';

            const dots = document.createElement('div');
            dots.className = 'carrossel-dots beneficios-dots';
            cards.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'dot' + (i === 0 ? ' active' : '');
                dot.addEventListener('click', () => {
                    current = i;
                    scrollToCurrent();
                    updateDots();
                });
                dots.appendChild(dot);
            });

            grid.parentElement.insertBefore(prevBtn, grid);
            grid.parentElement.appendChild(nextBtn);
            grid.parentElement.appendChild(dots);

            function updateDots() {
                dots.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === current));
            }

            function scrollToCurrent() {
                const card = cards[current];
                card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            }

            prevBtn.addEventListener('click', () => {
                current = (current - 1 + cards.length) % cards.length;
                scrollToCurrent();
                updateDots();
            });
            nextBtn.addEventListener('click', () => {
                current = (current + 1) % cards.length;
                scrollToCurrent();
                updateDots();
            });

            function checkVisibility() {
                const show = window.innerWidth <= 768;
                prevBtn.style.display = show ? 'flex' : 'none';
                nextBtn.style.display = show ? 'flex' : 'none';
                dots.style.display = show ? 'flex' : 'none';
            }
            window.addEventListener('resize', checkVisibility);
            checkVisibility();
        }
