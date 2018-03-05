import mapStyles from './mapStyles';

class Map {
    
    constructor() {
    }

    init(el, infobox, lat, lng) {
        let map = new google.maps.Map(document.getElementById(el), {
            styles: mapStyles,
            center: {lat: lat, lng: lng},
            zoom: 15,
            disableDefaultUI: true
        });

        let marker = new google.maps.Marker({
            position: {lat: lat, lng: lng},
            map: map,
            title: 'Rita Mata Stilwell',
            icon: {
                url: "/images/marker.svg",
                scaledSize: new google.maps.Size(64, 64)
            }  
        });

        marker.addListener('click', function() {
            infobox.classList.add('is--visible');
            infobox.classList.remove('is--hidden');
        });
    }

    toogleBox(el) {
        if(el.classList.contains('is--visible')) {
            el.classList.remove('is--visible');
            el.classList.add('is--hidden');
        } else {
            el.classList.add('is--visible');
            el.classList.remove('is--hidden');
        }
    }
}

export default Map;