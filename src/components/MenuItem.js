import React from 'react';
import '../App.css';

const MenuItem = ({ item, addToCart }) => (
  <div className="menu-item">
    <img src={item.image} alt={item.name} className="menu-item-image" />
    <h3>{item.name}</h3>
    <p>Price: {item.price} บาท</p>
    <button className="add-to-cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
  </div>
);

export default MenuItem;