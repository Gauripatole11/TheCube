import React, { useState } from "react";
import "./CampusMap.css";

function CampusMap() {
    const [showStudyRooms, setShowStudyRooms] = useState(false);

    const markers = [
        { x: 434, y: 180, category: "Study Rooms" },
        { x: 300, y: 650, category: "Study Rooms" },
        { x: 470, y: 780, category: "Study Rooms" },
        // Add more markers for different categories if needed
    ];

    const toggleStudyRooms = () => {
        setShowStudyRooms(!showStudyRooms);
    };

    return (
        <div className="campus-map-container">
            <img
                className="campus-map-image"
                src={require("../src/assets/UOP-Ofcl_Map_v4.jpg")}
                alt="Campus Map"
            />
            {showStudyRooms &&
                markers
                    .filter((marker) => marker.category === "Study Rooms")
                    .map((marker, index) => (
                        <div
                            key={index}
                            className="marker"
                            style={{ left: marker.x, top: marker.y }}
                        ></div>
                    ))}
            <div className="categories">
                <button onClick={toggleStudyRooms}>Study Rooms</button>
                {/* Add more category buttons here */}
            </div>
        </div>
    );
}

export default CampusMap;
