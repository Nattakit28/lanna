import React from 'react';
import '../App.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* เพิ่มโลโก้หรือข้อความ */}
        <h1>LANNAPOLY [IT]</h1>
      </div>
      <ul className="navbar-menu">
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('menu')}>About</li>
        <li onClick={() => scrollToSection('courses')}>Courses</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
