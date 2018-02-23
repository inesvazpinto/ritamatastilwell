import jQuery from 'jquery';
import anime from 'animejs';
//import scrollNavigation from './core/scrollNavigation';


/******************* MENU *******************/
let menu =  document.getElementById('js-menu');
/**
 * check if is mobile device based on media queries
 */
const isMobile = () => window.matchMedia( "(max-width: 64rem)" ).matches;
if (!isMobile()) {
    //do something for desktop
    menu.classList.remove('is--hidden');
    menu.classList.add('is--visible');
}
else {
    menu.classList.add('is--hidden');
    menu.classList.remove('is--visible');
}

// OPEN MENU BTN //
let hamburguerBtn = document.getElementById('js-menu-opener');
//let menu =  document.getElementById('js-menu');
hamburguerBtn.addEventListener('click', function() {
    /*anime({
        targets: menu,
        left: 0,
        easing: 'easeOutExpo'
    });*/

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



// CLOSE MENU WHEN SELECTING MENU-LINK //
let menuLink = document.getElementById('js-link');
menuLink.addEventListener('click', function() {
    console.log('lala');
    menu.classList.add('is--hidden');
    menu.classList.remove('is--visible');
});

/*
$(document).ready(function() {
   $(document).on('click', '#js-menu-opener', function() {
        $(this).toggleClass('active');
        $(".menu").toggleClass("active");
    });
});
*/
const blocks = document.querySelectorAll('.js-block');
const links = document.querySelectorAll('.menu-links');

blocks.forEach(function(block) {
    let offsetBlock = block.getBoundingClientRect();
    console.log(offsetBlock.y);

    //links.classList.remove('is--active');
    //let link = block.dataset.link();
    //link.classlist.add('is--active');
});

window.addEventListener('scroll', function() {
    
});
/*
$(document).ready(function() {

    $(document).on('click', '.menu-opener', function() {

    })
    $(".menu-opener").click(function() {
      $(".menu-opener, .menu").toggleClass("active");
    });

        $('.menu-link').on('click', function() {
            var _this = $(this);
            var section = $(_this).attr('href');
            var sectionFromTop = $(section).offset().top;
            $('html,body').animate({
                scrollTop: sectionFromTop,
            }, 800);
            if (window.innerWidth <= 768) {
                $(document).find('.menu-opener').trigger('click');
            }
            return false;
        });

});
*/

/*let hamburguerBtn = document.getElementById('js-menu-opener');
let menu =  document.getElementById('js-menu');
*/




/*function initMap() {
    var map; 
   
    map = new google.maps.Map(document.getElementById('map'), {

        center: {lat: 38.6954972, lng: -9.219691},
        zoom: 15,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: {lat: 38.6954972, lng: -9.219691},
        map: map,
        title: 'CCQ',
        icon: {
        path: google.maps.SymbolPath.CIRCLE,  
        scale:15  
        }
    });
}
*/
//window.onload = initMap();


/******************* MAP STYLE *******************/
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

/******************* MAP & CONTACT BOX *******************/
let box = document.getElementById('js-box');

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
            url: "src/images/marker.svg",
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
        console.log('hi');
        toggleBox(box);
    });

    box.addEventListener('click', function() {
        toggleBox(box);
    });

}

//initMap('map');

initMap('js-map-2');



/**
 * Animate SVG path
 * based on Anime.js ref: http://animejs.com/documentation/#morphing
*/
const morphingSVG = (svgPath) => {
  /*
   * TODO: grab the values from the other shapes in illustrator
   * and replace string values
   */

  anime({
    targets: svgPath,
    duration: 10000,
    easing: [0.5,0,0.5,1],
    d: [
      { value: 'M485.4,55.4c132.7,0,243.6,46.2,326.7,127s142,174.3,137.4,288.6S914.9,318,841,706.8S638.6,945,408.3,944.6 c-130.3-0.4-241.1-30.4-338-110.1S50.3,614.1,50.3,283.6s64.6-244.7,154.7-322.1S352.7,55.4,485.4,55.4z'},
      {value: 'M485.4,55.4c132.7,0,243.6,46.2,326.7,127s142,174.3,137.4,288.6S914.9,718,841,806.8S638.6,945,508.3,944.6 c-130.3-0.4-241.1-30.4-338-110.1S50.3,614.1,50.3,483.6s64.6-244.7,154.7-322.1S352.7,55.4,485.4,55.4z'}
    ],
    loop: true
  });

};

morphingSVG(document.getElementById('js-svg-clip'));


/**
 * Scroll to section
 */
const scrollToSection = (el) => {
  let {top} = el.getBoundingClientRect();
  let mainHeaderHeight = document.getElementById('top').scrollHeight;
  
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
    }, false);
}

/**
 * Add click event to links 
 * and attach scroll function
 */
const scrollNavigation = (navLinks) => {
    navLinks.forEach((link) => {
        navigate(link);
    });
}

/**
 * Main Navigation scroll animation
 * see ./core/scrollNavigation.js for details
 */
const navLinks = document.querySelectorAll('.menu-link');
scrollNavigation(navLinks);

