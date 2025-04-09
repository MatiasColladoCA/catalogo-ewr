import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResourceCard from '../ResourceCard/ResourceCard';
import './CategoryPanel.css';

const CategoryPanel = React.memo(function CategoryPanel({ category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${category.id}`);
  };

  return (
    <section className="category-panel">
      <h2 onClick={handleClick}>{category.name}</h2>
      <div className="resource-list-container">
      <ul className="resource-list">
        {category.resources.map((resource, index) => (
          <li key={index}>
            <ResourceCard resource={resource} />
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
});

export default CategoryPanel;
