// CategoriesPanel.js
import React from 'react';

function CategoriesPanel({ categories, onSelectCategory }) {
    return (
        <div className="categories-panel">
            <h2>Categories</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <button onClick={() => onSelectCategory(category)}>{category}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesPanel;
