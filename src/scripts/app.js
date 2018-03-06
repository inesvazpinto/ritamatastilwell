import anime from 'animejs';

window.anime = anime;

import toggleMenu from './core/toggleMenu';

import scrollPos from './core/scrollPos';

import scrollToBlock from './core/scrollToBlock';

import morphingSVG from './core/morphingSVG';

import map from './core/Map';

const isMobile = () => window.matchMedia('(max-width: 64rem)').matches;

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
    var target = link;
    link.addEventListener('click', function() {
        let _self = this;
        scrollToBlock(_self);
        toggleMenu(hamburguerBtn, menu);
    }, false);
});

scrollPos(blocks, navLinks);

morphingSVG(svgPath);

map.init(mapEl, infobox, 38.715021, -9.163152);

closeInfoxBtn.addEventListener('click', () => map.toggleBox(infobox));