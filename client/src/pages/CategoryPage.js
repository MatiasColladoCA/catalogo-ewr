import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import '../App.css';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = data.categories.find(cat => cat.id === parseInt(categoryId));

  if (!category) return <div>Category not found</div>;

  return (
    <div className="page-container">
      <h1>{category.name}</h1>
      <div className="resource-list-container">
        <ul className="resource-list">
          {category.resources.map((resource, index) => (
            <li key={index} className="resource-item">
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                {resource.image && (
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="resource-logo"
                  />
                )}
                <div className="resource-details">
                  <span className="resource-title">{resource.title}</span>
                  <p className="resource-description">{resource.description}</p>
                  {resource.type === 'canal' && (
                    <div className="channel-stats">
                      <span>Videos: {resource.videos}</span>
                      <span>Suscriptores: {resource.subscribers}</span>
                    </div>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;
