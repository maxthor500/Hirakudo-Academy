//set my map view
const map = L.map('mapid').setView([40.623934, 15.021327], 12);

//render the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//popup lat and lng with a click on the map
const popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

//set my icon marker
const myIcon = L.icon({
    iconUrl: './assets/images/marker.png',
    iconSize: [50, 80], // size of the icon
    iconAnchor: [25, 95], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//render markers with my icon
L.marker([40.632761, 15.050083], { icon: myIcon }).addTo(map).bindPopup('Hirakudo Academy');
L.marker([40.604353, 14.992014], { icon: myIcon }).addTo(map).bindPopup('ASD Tusciania');