import anime from 'animejs';
import jQuery from 'jquery';

window.$ = jQuery;
window.anime = anime;

import toggleMenu from './core/toggleMenu';
import scrollPos from './core/scrollPos';
import scrollToBlock from './core/scrollToBlock';
import morphingSVG from './core/morphingSVG';
import map from './core/Map';

const App = App || {};

App.init = (($, window, document, undefined) => {

	const blocks = $(document).find('.js-block');
	const menu =  document.getElementById('js-menu');
	const hamburguerBtn = document.getElementById('js-menu-opener');
	const navLinks = $(document).find('.menu-link');
	const svgPath = document.getElementById('js-svg-clip');
	const mapEl = document.getElementById('js-map-2');
	const infobox = document.getElementById('js-box');
	const closeInfoxBtn = document.getElementById('js-close');

	const main = () => {

		hamburguerBtn.addEventListener('click', function() {
			let _self = this;
			toggleMenu(_self, menu); 
		});

		$(navLinks).on('click', function() {
			navLinks.removeClass('is--active');
			scrollToBlock(this);
			toggleMenu(hamburguerBtn, menu);
			return false;
		});

		scrollPos(blocks, navLinks);

		morphingSVG(svgPath);

		map.init(mapEl, infobox, 38.715021, -9.163152);

		closeInfoxBtn.addEventListener('click', () => map.toggleBox(infobox));

	};

	return {
		main: main
	}

})(jQuery, window, document);

App.init.main();