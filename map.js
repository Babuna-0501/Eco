function initMap() {
    // The location of Uluru
    const ulanbator = { lat: 47.9164365, lng: 106.914070 };
    // The map, centered at ulanbator
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: ulanbator,
    });
    // The marker, positioned at ulanbator
    const marker = new google.maps.Marker({
      position: ulanbator,
      map: map,
      icon:'/assets/images/company/map_group2.png',
      draggarble: false
    });
  }
  