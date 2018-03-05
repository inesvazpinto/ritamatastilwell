import jQuery from 'jquery';
import anime from 'animejs';

/*------------------------------------*\
    #MORPHO ANIM.JS
\*------------------------------------*/
//based on Anime.js ref: http://animejs.com/documentation/#morphing
const morphingSVG = (svgPath) => {
  anime({
    targets: svgPath,
    duration: 4000,
    easing: [0.5,0,0.5,1],
    d: [
        { value: 'M83.5,536.9c0-247.5,174.5-480,422-480s485,229.5,485,477s-185.5,429-433,429S83.5,784.4,83.5,536.9z'},
        { value: 'M96,492.9c0-247.5,163.5-459,411-459s471,179.5,471,427s-184.5,525-432,525S96,740.4,96,492.9z'},
        { value: 'M83.5,536.9c0-247.5,174.5-480,422-480s485,229.5,485,477s-185.5,429-433,429S83.5,784.4,83.5,536.9z'}
    ],
    loop: true
  });

};

morphingSVG(document.getElementById('js-svg-clip'));


/*------------------------------------*\
    #MENU
\*------------------------------------*/
let menu =  document.getElementById('js-menu');
let title = document.getElementById('js-title');
let hamburguerBtn = document.getElementById('js-menu-opener');
/**
 * check if is mobile device based on media queries
 */
const isMobile = () => window.matchMedia( "(max-width: 64rem)" ).matches;
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

window.$ = jQuery;

// CLOSE MENU BTN //
hamburguerBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    hamburguerBtn.classList.toggle('active');
}, false);

const blocks = document.querySelectorAll('.js-block');
const links = document.querySelectorAll('.menu-links');

blocks.forEach(function(block) {
    let offsetBlock = block.getBoundingClientRect();
    console.log(offsetBlock.y);
});

window.addEventListener('scroll', function() {
    
});

/*------------------------------------*\
    #Scroll to section
\*------------------------------------*/
const scrollToSection = (el) => {
    let {top} = el.getBoundingClientRect();
    let mainHeaderHeight = document.getElementById('js-main-header').scrollHeight;
  
    const scroll = {
        y: window.pageYOffset
    };

    anime({
        targets: scroll,
        y: ((top + window.pageYOffset) - mainHeaderHeight),
        duration: 850,
        easing: 'easeInOutExpo',
        update: () => window.scroll(0, scroll.y)
    })
}

const navigate = (el) => {
    el.addEventListener('click', () => {
        let anchorSection = el.dataset.section; 
        scrollToSection(document.getElementById(anchorSection));
        menu.classList.add('is--hidden');
        menu.classList.remove('is--visible');
        hamburguerBtn.classList.toggle('active');
    }, false);
}

// Add click event to links //
const scrollNavigation = (navLinks) => {
    navLinks.forEach((link) => {
        navigate(link);
    });
}

// Main Navigation scroll animation //
const navLinks = document.querySelectorAll('.menu-link');
scrollNavigation(navLinks);


/*------------------------------------*\
    #MAP STYLE
\*------------------------------------*/
var styles = [
    {
        //nomes bairros
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b99b4a"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e9b40a"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e9b40a"
            }
        ]
    },
    {
        //principal
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fdc209"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        //jardins
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fece54"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f9cb33"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": 0.2
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fdc209"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#a28b2a"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fece54"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffd87c"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9b40a"
            }
        ]
    }
]

/*------------------------------------*\
    #MAP & CONTACT BOX
\*------------------------------------*/
let box = document.getElementById('js-box');
let close = document.getElementById('js-close');

function initMap(el) {
    let map = new google.maps.Map(document.getElementById(el), {
        styles: styles,
        center: {lat: 38.715021, lng: -9.163152},
        zoom: 15,
        disableDefaultUI: true
    });

    let marker = new google.maps.Marker({
        position: {lat: 38.715021, lng: -9.163152},
        map: map,
        title: 'Rita Mata Stilwell',
        icon: {
            url: "/images/marker.svg",
            scaledSize: new google.maps.Size(64, 64)
        }  
    });

    const toggleBox = function( el ) {
        if(el.classList.contains('is--visible')) {
            el.classList.remove('is--visible');
            el.classList.add('is--hidden');
        } else {
            el.classList.add('is--visible');
            el.classList.remove('is--hidden');
        }
    };

    marker.addListener('click', function() {
        toggleBox(box);
    });

    close.addEventListener('click', function() {
        toggleBox(box);
    });
}

initMap('js-map-2');
