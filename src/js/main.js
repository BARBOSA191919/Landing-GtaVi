import { setupMenu } from './menu.js';
import { setupInteractions } from './ui-interactions.js';
import { animateScrollIndicator, setupMainTimeline } from './gsap-animations.js';
import { handleLoader } from './loader.js';

document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    setupInteractions();
    animateScrollIndicator();
    setupMainTimeline();
    handleLoader();
});