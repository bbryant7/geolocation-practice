// let start = {
//   slatitute: latitude,
//   slongititude: longitude
// }
//
// let end = {
//   elatitute: latitude,
//   elongititude: longitude
// }

function geoFindMe() {
  var output = document.getElementById("map");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {

    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    var myLatLng = {lat: latitude, lng: longitude};


    // var marker = new google.maps.Marker({
    //     position: myLatLng,
    //     map: map,
    //     title: 'Hello World!'
    //   });

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=17&size=600x600&sensor=false`;
    console.log(img.src);


    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);

}
