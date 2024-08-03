// CategoryBar.js
import React from 'react';
import CategoryCard from '../CategoryCard/Card';
import './Categories.css';

const categories = [
  { label: 'Electronics', image: 'web.jpg' },
  { label: 'Fashion', image: 'web.jpg' },
  { label: 'Home & Kitchen', image: 'web.jpg' },
  { label: 'Beauty', image: 'web.jpg' },
  { label: 'Sports', image: 'web.jpg' },
  { label: 'Toys', image: 'web.jpg' },
  { label: 'Books', image: 'web.jpg' },
  { label: 'Automobiles', image: 'web.jpg' },
  { label: 'Groceries', image: 'web.jpg' }
];

const CategoryBar = () => {
  return (
    <div className="category-bar">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          image={category.image}
          label={category.label}
        />
      ))}
    </div>
  );
};

export default CategoryBar;
