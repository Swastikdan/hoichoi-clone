import './node_modules/flowbite/dist/flowbite.min.js'
// import Swiffy Slider JS
import { swiffyslider } from 'swiffy-slider'
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});

// import Swiffy Slider CSS
import "swiffy-slider/css"