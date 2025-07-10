gsap.registerPlugin(ScrollTrigger);

// Animaciones existentes
gsap.from(".hero-main-container", {
  scale: 1.45,
  duration: 2.8,
  ease: "power3.out",
});

gsap.to(".overlay", {
  opacity: 0,
  duration: 2.8,
  ease: "power3.out",
  onComplete: () => {
    document.body.style.overflow = "visible";
    document.body.style.overflowX = "hidden";
  },
});

// Scroll Indicator
const scrollIndicator = document.querySelector(".scroll-indicator");
const bounceTimeline = gsap.timeline({
  repeat: -1,
  yoyo: true,
});

bounceTimeline.to(scrollIndicator, {
  y: 20,
  opacity: 0.6,
  duration: 0.8,
  ease: "power1.inOut",
});


const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    scrub: 2,
    pin: true,
    start: "top top",
    end: "+=2000",
    ease: "none",
  },
});

tl.set(".hero-main-container", {
  scale: 1.25,
});



tl.to(".console-logos", {
  opacity: 1,
  duration: 1.2, /* Más lento */
  ease: "power2.out"
}, ">1.5"); /* Mayor delay */

// PASO 2: Ocultar logos y botón del tráiler al llegar a la segunda sección
tl.to(
  [".trailer-button-container", ".console-logos"], 
  {
    opacity: 0,
    duration: 0.5,
    ease: "power1.out"
  }, 
  "<+=0.5" // Medio segundo antes de la transición
);

tl.to(".hero-main-container", {
  scale: 1,
  duration: 1,
});

tl.to(
  ".hero-main-logo",
  {
    opacity: 0,
    duration: 0.5,
  },
  "<"
);


tl.to(
  ".hero-main-image",
  {
    opacity: 0,
    duration: 0.9,
  },
  "<+=0.5"
);


tl.to(
  ".hero-main-container",
  {
    backgroundSize: "28vh",
    duration: 1.5,
  },
  "<+=0.2"
);

tl.fromTo(
  ".hero-text",
  {
    backgroundImage: `radial-gradient(
          circle at 50% 200vh,
          rgba(255, 214, 135, 0) 0,
          rgba(157, 47, 106, 0.5) 90vh,
          rgba(157, 47, 106, 0.8) 120vh,
          rgba(32, 31, 66, 0) 150vh
        )`,
  },
  {
    backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
     rgb(247, 77, 82) 50.011vh,
      rgb(145, 42, 105) 90.0183vh,
       rgba(32, 31, 66, 0) 140.599vh)`,
    duration: 3,
  },
  "<1.2"
);

tl.fromTo(
  ".hero-text-logo",
  {
    opacity: 0,
    maskImage: `radial-gradient(circle at 50% 145.835%, rgb(0, 0, 0) 36.11%, rgba(0, 0, 0, 0) 68.055%)`,
  },
  {
    opacity: 1,
    maskImage: `radial-gradient(
    circle at 50% 105.594%,
    rgb(0, 0, 0) 62.9372%,
    rgba(0, 0, 0, 0) 81.4686%
  )`,
    duration: 3,
  },
  "<0.2"
);


tl.set(".hero-main-container", { opacity: 0 });

tl.to(".hero-1-container", { scale: 0.85, duration: 3 }, "<-=3");

tl.set(
  ".hero-1-container",
  {
    maskImage: `radial-gradient(circle at 50% 16.1137vh, rgb(0, 0, 0) 96.1949vh, rgba(0, 0, 0, 0) 112.065vh)`,
  },
  "<+=2.1"
);

tl.to(
  ".hero-1-container",
  {
    maskImage: `radial-gradient(circle at 50% -40vh, rgb(0, 0, 0) 0vh, rgba(0, 0, 0, 0) 80vh)`,
    duration: 2,
  },
  "<+=0.2"
);

tl.to(
  ".hero-text-logo",
  {
    opacity: 0,
    duration: 2,
  },
  "<1.5"
);

tl.set(".hero-1-container", { opacity: 0 });
tl.set(".hero-2-container", { visibility: "visible" });

tl.to(".hero-2-container", { opacity: 1, duration: 3 }, "<+=0.2");


tl.fromTo(
  ".hero-2-container",
  {
    backgroundImage: `radial-gradient(
          circle at 50% 200vh,
          rgba(255, 214, 135, 0) 0,
          rgba(157, 47, 106, 0.5) 90vh,
          rgba(157, 47, 106, 0.8) 120vh,
          rgba(32, 31, 66, 0) 150vh
        )`,
  },
  {
    backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
     rgb(247, 77, 82) 50.011vh,
      rgb(145, 42, 105) 90.0183vh,
       rgba(32, 31, 66, 0) 140.599vh)`,
    duration: 3,
  },
  "<1.2"
);


// Animación del menú
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menuContainer = document.querySelector('#menu-container');
  const closeBtn = document.querySelector('.menu-close-btn');

  if (menuBtn && menuContainer && closeBtn) {
    menuBtn.addEventListener('click', () => {
      menuContainer.classList.toggle('active');
      gsap.fromTo('.menu-container.active', {
        x: '100%',
        opacity: 0
      }, {
        x: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    });

    closeBtn.addEventListener('click', () => {
      gsap.to('.menu-container.active', {
        x: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          menuContainer.classList.remove('active');
        }
      });
    });
  } else {
    console.error('No se encontraron los elementos del menú:', { menuBtn, menuContainer, closeBtn });
  }

  // Navegación de pestañas
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      // Aquí puedes añadir lógica para actualizar el contenido según la pestaña
    });
  });

  // Overlay de carga
  const loadingOverlay = document.querySelector('#loading-overlay');
  if (loadingOverlay) {
    window.addEventListener('load', () => {
      gsap.to('#loading-overlay', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          loadingOverlay.style.display = 'none';
        }
      });
    });
  } else {
    console.warn('No se encontró el elemento #loading-overlay');
  }

  // Animación del logo VI
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

  // Evento del botón de tráiler
  const trailerButton = document.querySelector('.trailer-button');
  if (trailerButton) {
    trailerButton.addEventListener('click', () => {
      window.open('https://www.youtube.com/watch?v=trailer-url', '_blank');
    });
  }
});

document.querySelectorAll('.character').forEach(li => {
  li.addEventListener('click', () => {
    document.querySelectorAll('.character').forEach(x => x.classList.remove('active'));
    li.classList.add('active');
    // Aquí iría lógica para cambiar contenido según personaje
  });
});
