import React, { useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">H-Alt</div>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>Services</a>
            </li>
            <li>
              <a href="#process" onClick={closeMenu}>Process</a>
            </li>
            <li>
              <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
            </li>
            <li className="contact-btn">
      <a href="#contact" onClick={closeMenu}>Contact Us</a>
    </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
