import React, { useState } from 'react';
import './NavbarElements.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Logo
        </a>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-menu-list">
            <li className="navbar-menu-item">
              <a href="/" className="navbar-menu-link">
                Home
              </a>
            </li>
            <li className="navbar-menu-item">
              <a href="/about" className="navbar-menu-link">
                About
              </a>
            </li>
            <li className="navbar-menu-item">
              <a href="/services" className="navbar-menu-link">
                Services
              </a>
            </li>
            <li className="navbar-menu-item">
              <a href="/contact" className="navbar-menu-link">
                Contact
              </a>
            </li>
          </ul>
          <button className="navbar-toggle" onClick={toggleMenu}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

