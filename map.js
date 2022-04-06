// Initialize and add the map
function initMap() {
    // The location of Uluru
    const ulanbator = { lat: 47.915972, lng: 106.914898 };
    // The map, centered at ulanbator
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: ulanbator,
    });
    // The marker, positioned at ulanbator
    const marker = new google.maps.Marker({
      position: ulanbator,
      map: map,
    });
  }
  