import React from 'react';
import '../App.css';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="cart" className="cart-section">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} ({item.price} บาท)
          </li>
        ))}
      </ul>
      <h3>Total: {total} บาท</h3>
    </section>
  );
};

export default Cart;
