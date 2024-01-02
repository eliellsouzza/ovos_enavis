// Navbar.js

import { useState } from 'react';

import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
              <div className="navbar-logo">
              <img src="src/assets/enavis-logo-white.png" alt="logo" width={100}/>

        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="/">Página Inícial</a>
          <a href="/about">Sobre a Empresa</a>
          <a href="/contact">Produtos</a>
          <a href="/contact">Fale Conosco</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
