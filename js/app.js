let begin = () => {
    let inputOrigin = document.getElementById('origin');
    let inputDestination = document.getElementById('destination');
    let btnRout = document.getElementById('btn-trazar-ruta');
    let getPosition = localizacion => {
      let latitude = localizacion.coords.latitude;
      console.log(latitude);
      let longitude = localizacion.coords.longitude;
      console.log(longitude);
  
    }
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(getPosition);
  
      } else {
          alert('La geolocalización no está disponible en el navegador')
      }
  };
  window.addEventListener('load', begin)