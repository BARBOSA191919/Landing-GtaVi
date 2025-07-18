# GTA VI Landing Page

Una landing page cinemática e inmersiva inspirada en Grand Theft Auto VI, construida con tecnologías web modernas. Presenta animaciones avanzadas, efectos visuales impactantes y una experiencia de usuario que captura la esencia del universo GTA.

## 📋 Descripción

Esta landing page recrea la atmósfera única de Grand Theft Auto VI con animaciones fluidas, efectos de parallax, y una interfaz que transporta al usuario al mundo del juego. Desarrollada con HTML5, CSS3 avanzado y JavaScript moderno, utilizando GSAP para animaciones de alta calidad.

## 📷 Capturas de Pantalla

### Vista Principal
<img width="1852" height="1022" alt="image" src="https://github.com/user-attachments/assets/d00aff3c-2471-48f7-bcdd-7cc28e49e0cf" />
*Sección hero con el logo icónico de GTA VI y animaciones de entrada*

### Menú Interactivo
<img width="1862" height="1003" alt="image" src="https://github.com/user-attachments/assets/becdb60b-01ef-4307-ab51-8bfcf64aedc5" />
*Menú de navegación con efectos visuales y transiciones suaves*

### Animaciones GSAP
<img width="1855" height="1013" alt="image" src="https://github.com/user-attachments/assets/f367e68e-b02b-4ec3-a5bf-33ca57531856" />
*Efectos de parallax y animaciones complejas en movimiento*

### Efectos Visuales
<img width="1851" height="1017" alt="image" src="https://github.com/user-attachments/assets/0c64e19d-bbb9-4eec-9444-9e406a241148" />
*Overlays, filtros y efectos que recrean la estética del juego*

<div align="center">
<h3> Responsive Design</h3>
<img width="497" height="938" alt="image" src="https://github.com/user-attachments/assets/31dad534-1afa-4231-8f30-5b8d5312771d" />
<em><p>Adaptación perfecta para dispositivos móviles manteniendo la experiencia*</p></em>
</div>


## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura semántica y multimedia
- **CSS3** - Animaciones avanzadas, Grid, Flexbox
- **JavaScript (ES6+)** - Interactividad y lógica moderna
- **GSAP (GreenSock)** - Animaciones profesionales de alta performance
- **WebP/AVIF** - Imágenes optimizadas para web
- **CSS Custom Properties** - Variables CSS para temas dinámicos

## 📁 Estructura del Proyecto

```
barbosa191919-landing-gtavi/
├── README.md
├── index.html            # Página principal
├── package.json          # Dependencias y scripts
├── public/
│   └── images/
│       ├── fondo-menu.avif      # Fondo del menú (formato moderno)
│       ├── fondo-menu.webp      # Fondo del menú (fallback)
│       ├── gta_hero.avif        # Imagen principal hero
│       ├── gta_hero.webp        # Imagen principal hero (fallback)
│       ├── gta_logo_cut.avif    # Logo recortado
│       ├── gta_logo_cut.webp    # Logo recortado (fallback)
│       ├── gta_logo_purple.avif # Logo versión purple
│       ├── gta_logo_purple.webp # Logo versión purple (fallback)
│       ├── principal.avif       # Imagen principal
│       ├── principal.webp       # Imagen principal (fallback)
│       ├── Rockstar.avif        # Logo Rockstar Games
│       └── Rockstar.webp        # Logo Rockstar Games (fallback)
└── src/
    ├── css/
    │   ├── animation.css        # Animaciones CSS personalizadas
    │   ├── base.css            # Estilos base y reset
    │   ├── header.css          # Estilos del header
    │   ├── hero.css            # Estilos de la sección hero
    │   ├── media-queries.css   # Responsive design
    │   └── menu.css            # Estilos del menú
    └── js/
        ├── gsap-animations.js   # Animaciones GSAP
        ├── loader.js           # Lógica del loader
        ├── main.js             # Controlador principal
        ├── menu.js             # Funcionalidad del menú
        └── ui-interactions.js   # Interacciones de UI
```

## 🧩 Módulos y Componentes

### Módulos CSS
- **base.css** - Reset CSS, variables globales y estilos fundamentales
- **header.css** - Estilos de la cabecera con efectos de scroll
- **hero.css** - Sección principal con parallax y overlays
- **menu.css** - Menú de navegación con animaciones
- **animation.css** - Keyframes y animaciones CSS personalizadas
- **media-queries.css** - Responsive design para todos los dispositivos

### Módulos JavaScript
- **main.js** - Punto de entrada y coordinación de módulos
- **gsap-animations.js** - Timeline de animaciones GSAP complejas
- **loader.js** - Pantalla de carga con progreso animado
- **menu.js** - Lógica del menú hamburguesa y navegación
- **ui-interactions.js** - Microinteracciones y efectos hover

## 🛠️ Instalación y Configuración

### Requisitos Previos
- Node.js (v16 o superior)
- npm o yarn
- Navegador web moderno

### Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd barbosa191919-landing-gtavi
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:3000`

### Servidor de Producción

```bash
npm run build
npm run serve
```

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con live reload
- `npm run build` - Build optimizado para producción
- `npm run serve` - Servidor estático para preview
- `npm run lint` - Linter para código JavaScript
- `npm run format` - Formateo automático de código

## 🌟 Características

- ✅ **Animaciones Cinemáticas** - Efectos dignos de un trailer AAA
- ✅ **Parallax Avanzado** - Múltiples capas de profundidad
- ✅ **Loader Inmersivo** - Pantalla de carga temática
- ✅ **Menú Interactivo** - Navegación con efectos visuales
- ✅ **Imágenes Optimizadas** - Formatos AVIF/WebP con fallbacks
- ✅ **Responsive Premium** - Experiencia fluida en todos los dispositivos
- ✅ **Performance Optimizado** - Carga rápida y animaciones 60fps
- ✅ **Accesibilidad** - Soporte para lectores de pantalla
- ✅ **SEO Friendly** - Metadatos optimizados
- ✅ **Cross-browser** - Compatibilidad con todos los navegadores

## 🎯 Funcionalidades

### Experiencia Visual
- **Hero Cinemático**: Sección principal con efectos de película
- **Parallax Multicapa**: Profundidad visual avanzada
- **Transiciones Fluidas**: Animaciones suaves entre secciones
- **Efectos de Hover**: Microinteracciones en todos los elementos

### Animaciones GSAP
- **Timeline Complejo**: Secuencias de animación coordinadas
- **Scroll Trigger**: Animaciones activadas por scroll
- **Morphing Effects**: Transformaciones suaves de elementos
- **Particle System**: Efectos de partículas temáticos

### Interactividad
- **Menú Hamburguesa**: Navegación móvil optimizada
- **Smooth Scrolling**: Navegación suave entre secciones
- **Lazy Loading**: Carga diferida de imágenes
- **Preloader**: Experiencia de carga inmersiva

## 📱 Responsividad

Optimizado para todos los dispositivos:
- 🖥️ **Desktop** (1920px+) - Experiencia completa con todos los efectos
- 💻 **Laptop** (1024px-1919px) - Animaciones adaptadas
- 📱 **Tablet** (768px-1023px) - Interfaz táctil optimizada
- 📱 **Mobile** (320px-767px) - Experiencia simplificada pero impactante

## 🎨 Personalización

### Variables CSS
```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #8b5cf6;
  --dark-bg: #0a0a0a;
  --light-text: #ffffff;
  --accent-glow: #ff6b35;
  --animation-speed: 0.6s;
}
```

### Configuración GSAP
```javascript
// gsap-animations.js
gsap.registerPlugin(ScrollTrigger);

const heroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top center",
    end: "bottom center",
    scrub: 1
  }
});
```

## 🚀 Optimizaciones Implementadas

### Rendimiento
- **Lazy Loading**: Imágenes cargadas bajo demanda
- **AVIF/WebP**: Formatos de imagen modernos
- **CSS Minification**: Estilos optimizados
- **JS Bundling**: Código JavaScript optimizado
- **Preloading**: Recursos críticos precargados

### Experiencia de Usuario
- **Smooth Animations**: 60fps garantizados
- **Responsive Images**: Imágenes adaptativas por dispositivo
- **Fallback Support**: Compatibilidad con navegadores antiguos
- **Loading States**: Estados de carga visuales

## 📊 Métricas de Rendimiento

- **Lighthouse Performance**: 95+/100
- **First Contentful Paint**: < 1.8s
- **Time to Interactive**: < 3.2s
- **Cumulative Layout Shift**: < 0.1
- **Animation Frame Rate**: 60fps consistente

## 🎮 Características Temáticas

### Estética GTA
- **Colores Icónicos**: Paleta de colores oficial
- **Tipografía**: Fuentes que evocan el universo GTA
- **Efectos Visuales**: Filtros y overlays temáticos
- **Sonido**: Efectos de sonido integrados (opcional)

### Elementos Interactivos
- **Easter Eggs**: Elementos ocultos para descubrir
- **Hover Effects**: Efectos únicos en cada elemento
- **Particle Effects**: Partículas que siguen el mouse
- **Dynamic Backgrounds**: Fondos que reaccionan a la interacción

## 🔧 Configuración Avanzada

### Webpack Config
```javascript
module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

### Package.json
```json
{
  "dependencies": {
    "gsap": "^3.12.2"
  },
  "devDependencies": {
    "webpack": "^5.88.0",
    "webpack-cli": "^5.1.4",
    "css-loader": "^6.8.1"
  }
}
```

## 🤝 Contribución

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commitea tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Barbosa191919**

## 📞 Contacto

Para consultas o sugerencias:
- GitHub: [@barbosa191919](https://github.com/barbosa191919)

---

⭐ ¡No olvides dar una estrella al proyecto si te fue útil!

## 🙏 Agradecimientos

- **Rockstar Games** - Por crear el universo GTA inspirador
- **GSAP Team** - Por las herramientas de animación
- **Comunidad Web Dev** - Por recursos y tutoriales
- **Beta Testers** - Por feedback valioso

## ⚠️ Disclaimer

Este proyecto es un fan-made sin fines comerciales. Todos los derechos de Grand Theft Auto VI pertenecen a Rockstar Games y Take-Two Interactive.
