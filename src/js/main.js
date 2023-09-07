import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import { timers } from "jquery";
import images from "./modules/images";

window.addEventListener('DOMContentLoaded',() => {
    "use strict";      //первая строка с файла gulpfile.js

    let modalState = {};
    let deadline = '2023-09-11'; //stavim date do kakogo u vas skidky

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);   // вызов функции forms
    timer('.container1', deadline); 
    images();
});
