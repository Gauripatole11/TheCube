import React, { useState } from "react";
import "./CampusMap.css";

function CampusMap() {
    const [showStudyRooms, setShowStudyRooms] = useState(false);
    const [showLabs, setShowLabs] = useState(false);
    const [showMakerspace, setShowMakerspace] = useState(false);

    const markers = [
        { x: 434, y: 180, category: "Study Rooms", info: "Study Room 1" },
        { x: 300, y: 650, category: "Study Rooms", info: "Study Room 2" },
        { x: 470, y: 780, category: "Study Rooms", info: "Study Room 3" },
        { x: 250, y: 660, category: "Labs", info: "Lab 1" },
        { x: 550, y: 50, category: "Labs", info: "Lab 2" },
        { x: 480, y: 790, category: "Makerspace", info: "Makerspace 1" },

        // Add more markers for different categories if needed
    ];

    const toggleStudyRooms = () => {
        setShowStudyRooms(!showStudyRooms);
    };

    const toggleLabs = () => {
        setShowLabs(!showLabs);
    };

    const toggleMakerspace = () => {
        setShowMakerspace(!showMakerspace);
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
                            className="marker study-room-marker"
                            style={{ left: marker.x, top: marker.y }}
                        >
                            <div className="tooltip">{marker.info}</div>
                        </div>
                    ))}
            {showLabs &&
                markers
                    .filter((marker) => marker.category === "Labs")
                    .map((marker, index) => (
                        <div
                            key={index}
                            className="marker lab-marker"
                            style={{ left: marker.x, top: marker.y }}
                        >
                            <div className="tooltip">{marker.info}</div>
                        </div>
                    ))}
            {showMakerspace &&
                markers
                    .filter((marker) => marker.category === "Makerspace")
                    .map((marker, index) => (
                        <div
                            key={index}
                            className="marker makerspace-marker"
                            style={{ left: marker.x, top: marker.y }}
                        >
                            <div className="tooltip">{marker.info}</div>
                        </div>
                    ))}
            <div className="categories">
                <button onClick={toggleStudyRooms}>Study Rooms</button>
                <button onClick={toggleLabs}>Labs</button>
                <button onClick={toggleMakerspace}>Makerspace</button>
                {/* Add more category buttons here */}
            </div>
        </div>
    );
}

export default CampusMap;
