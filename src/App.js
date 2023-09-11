import React, { Component } from 'react';
import './App.css';
import MapContainer from './map'; // Import the MapContainer component

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">GOOGLE MAP WITH REACT</h1>
                </header>
                <MapContainer />
            </div>
        );
    }
}

export default App;
