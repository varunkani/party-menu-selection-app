import React from 'react';

function Filters({ activeCategory, onCategoryChange, searchTerm, onSearchChange, vegOnly, onVegOnlyChange }) {
  const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES", "NON-VEG"];

  return (
    <div className="filters">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          style={{ fontWeight: activeCategory === category ? 'bold' : 'normal' }}
        >
          {category}
        </button>
      ))}
      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={vegOnly}
          onChange={(e) => onVegOnlyChange(e.target.checked)}
        />
        Veg Only
      </label>
    </div>
  );
}

export default Filters;
