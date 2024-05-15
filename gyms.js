// this js uses geolocation to display the user location and nolan's film locations
var map = L.map('map', {
    center: [34.0522, -118.2437], // Default center
    zoom: 2, // Default zoom
    zoomControl: true,
    scrollWheelZoom: false
});

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Function to locate the user
function locateUser() {
    map.locate({setView: true, maxZoom: 10});

    map.on('locationfound', function (e) {
        L.marker(e.latlng).addTo(map)
            .bindPopup("Your location").openPopup();
    });

    map.on('locationerror', function (e) {
        alert("Location access denied.");
    });
}

// Call the function to locate the user
locateUser();

// locations where Nolan has filmed his movies
var locations = [
    [53.8020625, -1.5425625, "Pure gym - Leeds, England"],
    [51.6076875, -0.2104375, "Virgin Active - London"],
    [48.8520625, 2.3634375, "Keepcool - Paris"],
    [37.1705625, -3.6015625, " Gym Do It - Granada"]
];

// to add markers for Nolan's filming locations
locations.forEach(function(location) {
    L.marker([location[0], location[1]])
        .addTo(map)
        .bindPopup(location[2]);
});