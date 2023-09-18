import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import MapWithMarkers from './MapWithMarkers';

function App() {
    return (
        <div>
            {/* Other components */}
            <ErrorBoundary>
                <MapWithMarkers />
            </ErrorBoundary>
            {/* Other components */}
        </div>
    );
}

export default App;
