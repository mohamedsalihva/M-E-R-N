import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar">
  <ul>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#contact">Home</a>
    </li>
    <li>
      <a href="#services">services</a>
    </li>
    <li>
      <a href="#Orders">Orders</a>
    </li>
    <li>
      <a href="#Projects">Projects</a>
    </li>
    <li>
      <a href="#Contact">Contact</a>
    </li>
  </ul>
</nav>


  );
};

export default Navbar;
