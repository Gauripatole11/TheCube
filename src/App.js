import React, { useState } from 'react';
import Map from './Map';
import CampusMap from './CampusMap';
import CategoriesPanel from './CategoriesPanel';

function App() {
    // Create state for the selected category
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Function to handle category selection
    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        // Logic to filter map markers based on the selected category
    };

    return (
        <div className="App">
            <CategoriesPanel
                categories={['Study Rooms', 'Labs', 'Makers Space']}
                onSelectCategory={handleSelectCategory}
            />
            <CampusMap /> {/* Render the CampusMap component here */}
            <Map selectedCategory={selectedCategory} /> {/* Pass selectedCategory as a prop */}
        </div>
    );
}

export default App;
