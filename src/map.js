import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '400px',
        };

        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 37.9808, // Updated with numeric latitude value
                    lng: -121.3060, // Updated with numeric longitude value
                }}
            >
                <Marker
                    name={'Current location'}
                    position={{
                        lat: 37.9808, // Latitude
                        lng: -121.3060, // Longitude
                    }}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAuTTvVYx9DgXQLAXhlHYvpilQooZ32qyM', // Replace with your Google Maps API Key
})(MapContainer);
