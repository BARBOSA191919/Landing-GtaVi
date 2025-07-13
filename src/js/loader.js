// evento de carga de la ventana
export function handleLoader() {
    const loadingOverlay = document.querySelector('#loading-overlay');
    if (!loadingOverlay) return;

    window.addEventListener('load', () => {
        gsap.to(loadingOverlay, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                loadingOverlay.style.display = 'none';
            }
        });
    });
}