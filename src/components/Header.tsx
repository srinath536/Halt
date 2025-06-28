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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  

  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={scrollToTop} style={{ cursor: "pointer" }}>
          H-Alt
        </div>
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </button>
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#" onClick={() => { closeMenu(); scrollToTop(); }}>Home</a>
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
