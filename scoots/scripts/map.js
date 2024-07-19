function initMap() {
    const location1 = { lat: 20.507, lng: -86.947 };
    const location2 = { lat: 20.485, lng: -86.962 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location1,
    });
    const marker1 = new google.maps.Marker({
        position: location1,
        map: map,
        title: "Playa del Carmen-Cozumel Ferry Dock",
    });
    const marker2 = new google.maps.Marker({
        position: location2,
        map: map,
        title: "Terminal Puerta Maya",
    });
}