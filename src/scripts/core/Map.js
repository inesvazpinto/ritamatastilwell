import mapStyles from './mapStyles';

const map = (() => {

    const init = (el, infobox, thisLat, thisLng) => {
        let map = new google.maps.Map(el, {
            styles: mapStyles,
            center: {lat: thisLat, lng: thisLng},
            zoom: 15,
            disableDefaultUI: true
        });

        let marker = new google.maps.Marker({
            position: {lat: thisLat, lng: thisLng},
            map: map,
            title: 'Rita Mata Stilwell',
            icon: {
                url: "images/marker.svg",
                scaledSize: new google.maps.Size(64, 64)
            }  
        });

        marker.addListener('click', () => toggleBox(infobox));
    };

    const toggleBox = (el) => {
        if (el.classList.contains('is--visible')) {
            el.classList.remove('is--visible');
            el.classList.add('is--hidden');
        } else {
            el.classList.add('is--visible');
            el.classList.remove('is--hidden');
        }
    };

    return {
        init: init,
        toggleBox: toggleBox
    }

})();

export default map;