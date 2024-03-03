import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar" style={{ backgroundColor: '#fff', padding: '20px 0', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
    <div className="container">
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <li style={{ marginRight: '20px' }}>
          <a href="#about" style={{ color: '#0e0d0d', textDecoration: 'none', fontSize: '1.2rem', padding: '10px 15px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>About</a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a href="#contact" style={{ color: '#0e0d0d', textDecoration: 'none', fontSize: '1.2rem', padding: '10px 15px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Home</a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a href="#services" style={{ color: '#0e0d0d', textDecoration: 'none', fontSize: '1.2rem', padding: '10px 15px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Services</a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a href="#orders" style={{ color: '#0e0d0d', textDecoration: 'none', fontSize: '1.2rem', padding: '10px 15px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Orders</a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a href="#projects" style={{ color: '#0e0d0d', textDecoration: 'none', fontSize: '1.2rem', padding: '10px 15px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Projects</a>
        </li>
        <li>
          <a href="#contact" style={{ color: '#0e0d0d', textDecoration: 'none', fontSize: '1.2rem', padding: '10px 15px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  );
};

export default Navbar;
