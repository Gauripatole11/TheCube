// Map.js
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';

function Map({ selectedCategory }) {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        // Initialize the map only once when the component mounts
        const map = L.map(mapContainerRef.current).setView([51.505, -0.09], 13);

        // Add a base tile layer (you can replace this with your own map source)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Sample marker data (replace with your data)
        const markers = [
            { name: 'Study Room 1', category: 'Study Rooms', lat: 51.505, lng: -0.09 },
            { name: 'Study Room 2', category: 'Study Rooms', lat: 51.51, lng: -0.1 },
            // Add more markers as needed
        ];

        // Filter markers based on the selected category
        const filteredMarkers = selectedCategory
            ? markers.filter((marker) => marker.category === selectedCategory)
            : markers;

        // Create markers and add them to the map
        filteredMarkers.forEach((marker) => {
            const leafletMarker = L.marker([marker.lat, marker.lng]).addTo(map);
            leafletMarker.bindPopup(marker.name); // Display marker name on click
        });

        // Cleanup function to destroy the map when the component unmounts
        return () => {
            map.remove();
        };
    }, [selectedCategory]); // Include 'selectedCategory' in the dependency array

    return <div ref={mapContainerRef} id="map" style={{ height: '500px' }}></div>;
}

export default Map;
