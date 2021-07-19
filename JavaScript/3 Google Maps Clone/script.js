mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JlZ25lbyIsImEiOiJja3I5MHR3NXozNzRjMnlzNnFia2w2ODJmIn0.mq55uysqK0JLg1vPI-VSXg';

navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, { enableHighAccuracy: true });

function succesLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,

    });

    map.addControl(directions, 'top-left');
}