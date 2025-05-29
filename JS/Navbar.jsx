import React, { useState } from 'react';
import './Navbar.css'; // Link to your custom CSS
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <div className="navbar-logo">Mpoma Parents</div>

        {/* Toggle Icon */}
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <nav className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
