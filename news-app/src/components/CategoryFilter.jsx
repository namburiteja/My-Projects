import React from 'react';
import './CategoryFilter.css';

const categories = [
  'business',
  'sports',
  'technology',
  'health',
  'entertainment',
  'science',
  'environment'
];

export default function CategoryFilter({ onCategoryChange }) {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button key={cat} onClick={() => onCategoryChange(cat)}>
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
