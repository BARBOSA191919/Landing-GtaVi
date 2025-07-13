//menu de interacciones
export function setupInteractions() {
    // Navegación de pestañas
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Personajes (resalta el seleccionado)
    document.querySelectorAll('.character').forEach(li => {
        li.addEventListener('click', () => {
            document.querySelectorAll('.character').forEach(x => x.classList.remove('active'));
            li.classList.add('active');
        });
    });

    // Logo animado con ScrollTrigger
    gsap.from('.vi-logo-animated', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.hero-main-container',
            start: 'top 80%',
        },
    });

    // Botón del tráiler
    const trailerButton = document.querySelector('.trailer-button');
    if (trailerButton) {
        trailerButton.addEventListener('click', () => {
            window.open('https://www.youtube.com/watch?v=trailer-url', '_blank');
        });
    }
}