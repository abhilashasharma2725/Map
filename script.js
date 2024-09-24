// Add your Mapbox API token here
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpZmEzMyIsImEiOiJjbTFienRma3AwZ3MyMmtzNmNya25scW9pIn0.ljsIhCngYnGHG7rua8Ah_g';

// Create a new map instance
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [77.2090, 28.6139], // Initial map center coordinates (Delhi, India)
    zoom: 10 // Initial zoom level
});

// Add a marker at the map center
const marker = new mapboxgl.Marker()
    .setLngLat([77.2090, 28.6139]) // Coordinates for the marker
    .addTo(map);

// Add navigation controls (zoom in/out)
map.addControl(new mapboxgl.NavigationControl());