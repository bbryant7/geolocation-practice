<!-- getCurrentPosition() = current geo position, executes call back when position is determined


navigator.geolocation is the object you can get geolocation from -->

watchPosition() will update position if it changes; returns an ID number



if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    findCoordinates(position.coords.latitude, position.coords.longitude);
  });
} else {
  console.log("your browser doesn't support this.")
}

function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}


<!-- <script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDCq04ArY70ba05n6sTkDx0VldkX1fVtCg&callback=initMap">
</script> -->
