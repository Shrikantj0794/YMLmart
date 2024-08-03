
import React from 'react';
import './Card.css';

const CategoryCard = ({ image, label }) => {
  return (
    <div className="category-card">
      <img src={image} alt={label} className="category-image" />
      <p className="category-label">{label}</p>
    </div>
  );
};

export default CategoryCard;
