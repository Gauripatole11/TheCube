import React, { useState } from "react";
import "./CampusMap.css"; // Import your CSS styles for positioning markers

function CampusMap() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [markers, setMarkers] = useState([]);

// // Use the modern standard
const pressure = event.pressure;

    const handleCategoryClick = (x, y) => {
        // Add a new marker to the state
        setMarkers([...markers, { x, y }]);
    };

    return (
        <div className="campus-map-container">
            <img
                className="campus-map-image"
                src={require("google-maps-app/src/assets/UOP-Ofcl_Map_v4.jpg")}
                alt="Campus Map"
            />
            {markers.map((marker, index) => (
                <div
                    key={index}
                    className="marker"
                    style={{ left: marker.x, top: marker.y }}
                ></div>
            ))}
            <div className="categories">
                <button onClick={() => handleCategoryClick(348, 109, "Study Rooms")}>Study Rooms</button>
            </div>
        </div>
    );
}

export default CampusMap;
