let map; 


function initMap(){

    map = new google.maps.Map(document.getElementById('map'),
    {
        center:{lat:40.48972, lng: 68.78417},
        zoom:17,
    })
}

window.initMap() = initMap()