var map;
var marker;

function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -23.5568322, lng: -46.9575387},
    zoom: 15, // typical is usually 8 or 9
    scrollwheel: false,
    fullscreenControl: false,
    mapTypeControl: false,
  })
   marker = new google.maps.Marker({position: {lat: -23.5568322, lng: -46.9575387}, map: map});
  ;
}// end initMap function
