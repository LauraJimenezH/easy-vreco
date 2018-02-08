let begin = () => {
  let inputOrigin = document.getElementById('origin');
  let inputDestination = document.getElementById('destination');
  let btnRout = document.getElementById('btn-trazar-ruta');
  let autocompleteOrigin = new google.maps.places.Autocomplete(inputOrigin);
  let autocompleteDestination = new google.maps.places.Autocomplete(inputDestination);
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;
  let getPosition = localizacion => {
    let latitude = localizacion.coords.latitude;
    let longitude = localizacion.coords.longitude;
    const mapBox = document.getElementById('map');
    let map = new google.maps.Map(mapBox, {
      zoom: 15,
      center: {
        lat: latitude,
        lng: longitude
      }
    });
    let miUbicacion = new google.maps.Marker({
      position: {
        lat: latitude,
        lng: longitude
      },
      animation: google.maps.Animation.DROP,
      map: map
    });
    let calculateAndDisplayRoute = function(directionsService, directionsDisplay) {
      directionsService.route({
        origin: inputOrigin.value,
        destination: inputDestination.value,
        travelMode: 'DRIVING'

      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('No se encontro una ruta');
        }
      });
      directionsDisplay.setMap(map);
    };
    let trazarRuta = function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    btnRout.addEventListener('click', trazarRuta);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  } else {
    alert('La geolocalización no está disponible en el navegador');
  }
};
window.addEventListener('load', begin);
