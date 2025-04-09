import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import data from './data/data.json';
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';

import CategoryPanel from './features/catalog/components/CategoryPanel/CategoryPanel';

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
