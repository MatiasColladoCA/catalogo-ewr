import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import data from './data/data.json';
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';

const ResourceItem = React.memo(function ResourceItem({ resource }) {
  return (
    <li className="resource-item">
      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-link">
        {resource.image && (
          <img 
            src={resource.image} 
            alt={resource.title}
            className="resource-logo"
          />
        )}
        <span className="resource-title">{resource.title}</span>
      </a>
    </li>
  );
});

const CategoryPanel = React.memo(function CategoryPanel({ category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${category.id}`);
  };

  return (
    <section className="category-panel" onClick={handleClick}>
      <h2>
        {category.name}
      </h2>
      <div className="resource-list-container">
        <ul className="resource-list">
          {category.resources.map((resource, index) => (
            <ResourceItem key={index} resource={resource} />
          ))}
        </ul>
      </div>
    </section>
  );
});

function App() {
  const [categories, setCategories] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setCategories(data.categories);
    
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setScrollY(window.scrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Router>
      <div className="app">
        <Header show={showHeader} scrolled={scrollY > 50} />
        
        <Routes>
          <Route path="/" element={
            <main className="catalog-container">
              {categories.map(category => (
                <CategoryPanel key={category.id} category={category} />
              ))}
            </main>
          } />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
