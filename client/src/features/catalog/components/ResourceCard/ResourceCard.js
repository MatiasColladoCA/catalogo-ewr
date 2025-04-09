import React from 'react';
import './ResourceCard.css';

const ResourceCard = React.memo(function ResourceCard({ resource }) {
  return (
    <li className="resource-card">
      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-link">
        {resource.image && (
          <img 
            src={resource.image} 
            alt={resource.title}
            className="resource-logo"
          />
        )}
        <div className="resource-content">
          <h3 className="resource-title">{resource.title}</h3>
          <p className="resource-description">{resource.description}</p>
        </div>
      </a>
    </li>
  );
});

export default ResourceCard;
