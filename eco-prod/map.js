function initMap() {
    // The location of Uluru
    const ulanbator = { lat: 47.9164365, lng: 106.914520 };
    // The map, centered at ulanbator
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: ulanbator,
    });
    // The marker, positioned at ulanbator
    const image =
    "/assets/marker_map.svg";
    const beachMarker = new google.maps.Marker({
      position: { lat: 47.9164365, lng: 106.914520 },
      map,
      icon: image,
    });
  }
  