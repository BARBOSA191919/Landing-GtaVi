// Función del menú exportada
export function setupMenu() {
    // Seccion de menú
    const menuBtn = document.querySelector('.menu-btn');
    const menuContainer = document.querySelector('#menu-container');
    const menuCloseBtn = document.querySelector('#menu-close-btn');

    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => {
            gsap.to(menuContainer, {
                x: '100%',
                opacity: 0,
                duration: 0.6,
                ease: 'power4.in',
                onComplete: () => {
                    menuContainer.classList.remove('active');
                    menuBtn.classList.remove('active');
                    document.body.classList.remove('menu-open'); // 👈 RESTAURA SCROLL
                }
            });
        });
    }

    if (menuBtn && menuContainer) {
        // Abrir y cerrar el menú (toggle)
        menuBtn.addEventListener('click', () => {
            const isActive = menuContainer.classList.contains('active');

            if (!isActive) {
                menuContainer.classList.add('active');
                menuBtn.classList.add('active');
                document.body.classList.add('menu-open'); // 👈 BLOQUEA SCROLL

                gsap.fromTo(menuContainer, {
                    x: '100%',
                    opacity: 0
                }, {
                    x: '0%',
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            } else {
                gsap.to(menuContainer, {
                    x: '100%',
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power4.in',
                    onComplete: () => {
                        menuContainer.classList.remove('active');
                        menuBtn.classList.remove('active');
                        document.body.classList.remove('menu-open'); // 👈 RESTAURA SCROLL
                    }
                });
            }
        });

        // Cerrar al hacer clic fuera del menú
        document.addEventListener('click', (e) => {
            if (
                menuContainer.classList.contains('active') &&
                !menuContainer.contains(e.target) &&
                !menuBtn.contains(e.target)
            ) {
                gsap.to(menuContainer, {
                    x: '100%',
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power4.in',
                    onComplete: () => {
                        menuContainer.classList.remove('active');
                        menuBtn.classList.remove('active');
                        document.body.classList.remove('menu-open'); // 👈 RESTAURA SCROLL
                    }
                });
            }
        });
    } else {
        console.error('No se encontraron los elementos del menú:', { menuBtn, menuContainer });
    }
}