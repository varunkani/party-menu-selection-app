import React from 'react';
import DishCard from './DishCard';

function DishList({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) {
  return (
    <div className="dish-list">
      {dishes.map(dish => (
        <DishCard
          key={dish.id}
          dish={dish}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          isSelected={selectedDishes.includes(dish.id)}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
}

export default DishList;
