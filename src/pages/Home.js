import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-overlay">
        <div className="home-content">
          {/* ข้อความต้อนรับ */}
          <h1>Welcome to IT Department</h1>
          <p>
            The Information Technology Department at Lanna Polytechnic College
            is committed to fostering innovation and equipping students with
            technological skills to excel in the modern world.
          </p>
          {/* ปรัชญาของสาขา */}
          <blockquote className="philosophy">
            "Empowering creativity and technology to build a better future."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Home;
