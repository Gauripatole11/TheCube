import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

function MapWithMarkers({ selectedCategory }) {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = L.map(mapContainerRef.current).setView([0, 0], 1); // Set initial view

        // Create a custom overlay using your JPG map image
        const customOverlay = L.imageOverlay('./assets/UOP-Ofcl_Map_v4.jpg', [
            [0, 0], // Replace with the top-left coordinates of your image
            [1389, 1286], // Replace with the height and width of your image
        ]).addTo(map);

        // Sample marker data with coordinates (x, y) on the JPG map image
        const markers = [
            { name: 'Study Room 1', x: 378, y: 144, category: 'Study Rooms' },
            { name: 'Study Room 2', x: 150, y: 250, category: 'Study Rooms' },
            // Add more markers as needed
        ];

        // Filter markers based on the selected category
        const filteredMarkers = selectedCategory
            ? markers.filter((marker) => marker.category === selectedCategory)
            : markers;

        // Create markers and add them to the custom overlay
        filteredMarkers.forEach((marker) => {
            const markerIcon = L.divIcon({ className: 'custom-marker', html: marker.name });
            const markerPoint = map.latLngToContainerPoint([marker.y, marker.x]);

            L.marker(map.containerPointToLatLng(markerPoint), { icon: markerIcon }).addTo(map);
        });

        // Set the map view to fit the custom overlay
        map.fitBounds(customOverlay.getBounds());

        return () => {
            map.remove();
        };
    }, [selectedCategory]);

    return <div ref={mapContainerRef} id="map" style={{ height: '500px' }} />;
}

export default MapWithMarkers;
