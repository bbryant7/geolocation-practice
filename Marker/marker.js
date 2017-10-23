

function geoFindMe() {
  if (navigator.geolocation){
  function success(position) {
    let latitude  = position.coords.latitude;
    let longitude = position.coords.longitude;
}
}
navigator.geolocation.getCurrentPosition(success);
  }
