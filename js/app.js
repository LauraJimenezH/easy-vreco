let begin = () => {
    let inputOrigin = document.getElementById('origin');
    let inputDestination = document.getElementById('destination');
    let btnRout = document.getElementById('btn-trazar-ruta');
    let getPosition = localizacion => {
      let latitude = localizacion.coords.latitude;
      console.log(latitude);
      let longitude = localizacion.coords.longitude;
      console.log(longitude);
      const mapBox = document.getElementById('map');
        let map = new google.maps.Map(mapBox,{
            zoom: 15,
            center: {
                lat: latitude,
                lng: longitude
            }                      
        }) 
        let miUbicacion = new google.maps.Marker({
			position: {lat:latitude, lng:longitude},
			animation: google.maps.Animation.DROP,
			map: map
		});  
    }
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(getPosition);
  
      } else {
          alert('La geolocalización no está disponible en el navegador')
      }
  };
  window.addEventListener('load', begin)