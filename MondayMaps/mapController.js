
var map;

function initMap() {
  // The location of Uluru
  var pos = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: pos});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: pos, map: map});
}
function addMarker(pos) {
    console.log(pos.lat + " " + pos.lon);
    var marker = new google.maps.Marker({position: pos, map: map});
}