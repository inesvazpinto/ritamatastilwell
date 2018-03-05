import anime from 'animejs';

window.anime = anime;

import scrollPos from './core/scrollPos';

import scrollNavigation from './core/scrollNavigation';

import morphingSVG from './core/morphingSVG';

import Map from './core/Map';

const isMobile = () => window.matchMedia( "(max-width: 64rem)" ).matches;

const blocks = document.querySelectorAll('.js-block');
const links = document.querySelectorAll('.menu-link');
scrollPos(blocks, links);

const navLinks = document.querySelectorAll('.menu-link');
scrollNavigation(navLinks);

morphingSVG(document.getElementById('js-svg-clip'));

const infobox = document.getElementById('js-box');
const closeInfox = document.getElementById('js-close');

const map = new Map();

map.init('js-map-2', infobox, 38.715021, -9.163152);

closeInfox.addEventListener('click', function() {
    map.toogleBox(infobox);
});




/*------------------------------------*\
    #MENU
\*------------------------------------*/
let menu =  document.getElementById('js-menu');
let title = document.getElementById('js-title');
let hamburguerBtn = document.getElementById('js-menu-opener');


if (!isMobile()) {
    // for desktop:
    title.classList.remove('is--visible');
    title.classList.add('is--hidden'); 
    hamburguerBtn.classList.add('is--hidden');
    hamburguerBtn.classList.remove('is--visible');
}
else {
    // for mobile:
    menu.classList.add('is--hidden');
    menu.classList.remove('is--visible');
    title.classList.add('is--visible');
    title.classList.remove('is--hidden'); 
}

// OPEN MENU BTN //
hamburguerBtn.addEventListener('click', function() {
    if (menu.classList.contains('is--hidden')) {
        menu.classList.remove('is--hidden');
        menu.classList.add('is--visible');
    } else {
        menu.classList.add('is--hidden');
        menu.classList.remove('is--visible');
    }
});

// CLOSE MENU BTN //
hamburguerBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    hamburguerBtn.classList.toggle('active');
}, false);
