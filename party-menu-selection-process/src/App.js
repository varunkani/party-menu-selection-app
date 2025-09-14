// src/App.js
import React, { useState } from 'react';
import { dishes as mockDishes } from './data/mockDishes';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('STARTER');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  const filteredDishes = mockDishes.filter(dish => 
    dish.mealType === selectedCategory &&
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!vegOnly || dish.type === 'VEG')
  );

  const handleAddDish = (id) => {
    setSelectedDishes(prev => [...prev, id]);
  };

  const handleRemoveDish = (id) => {
    setSelectedDishes(prev => prev.filter(dishId => dishId !== id));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentDish(null);
  };

  return (
    <div className="app-container">
      <h1>Party Menu Selection App</h1>

      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
      />

      <DishList
        dishes={filteredDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={handleViewIngredients}
      />

      <h2>Selected Dishes:</h2>
      <ul>
        {selectedDishes.map(id => {
          const dish = mockDishes.find(d => d.id === id);
          return <li key={id}>{dish?.name}</li>;
        })}
      </ul>

      {isModalOpen && <IngredientModal dish={currentDish} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
