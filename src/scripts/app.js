import anime from 'animejs';

window.anime = anime;

import toggleMenu from './core/toggleMenu';

import scrollPos from './core/scrollPos';

import scrollNavigation from './core/scrollNavigation';

import morphingSVG from './core/morphingSVG';

import map from './core/Map';

const blocks = document.querySelectorAll('.js-block');

const menu =  document.getElementById('js-menu');

const hamburguerBtn = document.getElementById('js-menu-opener');

const navLinks = document.querySelectorAll('.menu-link');

const svgPath = document.getElementById('js-svg-clip');

const mapEl = document.getElementById('js-map-2');

const infobox = document.getElementById('js-box');

const closeInfoxBtn = document.getElementById('js-close');

hamburguerBtn.addEventListener('click', function() {
    let _self = this;
    toggleMenu(_self, menu); 
});

navLinks.forEach((link) => {
    link.addEventListener('click', function() {
        scrollNavigation(this);
        toggleMenu(hamburguerBtn, menu);
    }, false);
});

scrollPos(blocks, navLinks);

morphingSVG(svgPath);

map.init(mapEl, infobox, 38.715021, -9.163152);

closeInfoxBtn.addEventListener('click', () => map.toggleBox(infobox));