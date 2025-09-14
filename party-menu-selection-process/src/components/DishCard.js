import React from 'react';

function DishCard({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} width="300" height="200" />
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <button onClick={() => isSelected ? onRemoveDish(dish.id) : onAddDish(dish.id)}>
        {isSelected ? 'Remove' : 'Add'}
      </button>
      <button onClick={() => onViewIngredients(dish)}>Ingredients</button>
    </div>
  );
}

export default DishCard;
