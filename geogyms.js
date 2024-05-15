// Initialize the map
var map = L.map('map').setView([34.0522, -118.2437], 2); // Default center and zoom
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Location found 
function onLocationFound(e) {
    L.marker(e.latlng).addTo(map).bindPopup("Your location").openPopup();
}

// Location error
function onLocationError(e) {
    alert("Location access denied.");
}

// Function to locate the user
function locateUser() {
    map.locate({setView: true, maxZoom: 10});
}

// User location 
locateUser();

// Locations of gyms
var nolanLocations = [
    {coords: [53.8020625, -1.5425625], name: "Pure gym - Leeds, England"},
    {coords: [51.6076875, -0.2104375], name: "Virgin Active - London"},
    {coords: [48.8520625, 2.3634375], name: "Keepcool - Paris"},
    {coords: [38.7383125, -104.7344375], name: "Anytime Fitness - Colorado"},
    {coords: [29.3940625, -94.9474375], name: "Planet Fitness - Texas"},
    {coords: [37.6265625, -122.4274375], name: "Fitness 19 - San Francisco"},
    {coords: [37.1705625, -3.6015625], name: "Gym Do It - Granada"}
];

// Marks for the gyms locations
nolanLocations.forEach(function(location) {
    L.marker(location.coords).addTo(map).bindPopup(location.name);
});

// Event listeners for location found and error
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
