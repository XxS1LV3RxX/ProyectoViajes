function initMap() {
    // Crear el mapa
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 19.4326, lng: -99.1332 }, // Coordenadas de ejemplo (Ciudad de México)
      zoom: 15, // Nivel de zoom
    });
  
    // Crear el marcador
    const marker = new google.maps.Marker({
      position: { lat: 19.4326, lng: -99.1332 }, // Coordenadas de tus oficinas
      map: map,
      title: "Nuestra oficina", // Título que aparecerá al hacer clic en el marcador
    });
  }
  
  // Cargar el script de Google Maps con tu API Key
  function loadMapScript() {
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=initMap";
    script.async = true;
    document.body.appendChild(script);
  }
  
  // Llamar a la función que carga el mapa
  loadMapScript();
  