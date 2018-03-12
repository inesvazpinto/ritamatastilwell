const mapStyles = [
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
];

export default mapStyles;