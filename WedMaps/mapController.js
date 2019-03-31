var map;

function initMap(){
    var pos = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: pos});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: pos, map: map});
}