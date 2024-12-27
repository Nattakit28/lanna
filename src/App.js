import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <Menu addToCart={addToCart} />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;