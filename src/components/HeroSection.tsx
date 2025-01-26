import React from "react";
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Tailored Human-Alternate Solutions for Every Business</h1>
        <p>We turn your challenges into custom solutions.</p>
        <div className="cta-buttons">
          {/* "Contact Us" button that navigates to contact section */}
          <a href="#contact">
            <button>Contact Us</button>
          </a>
          {/* "Explore Services" button that navigates to services section */}
          <a href="#services">
            <button>Explore Services</button>
          </a>
        </div>
        {/* Curved Arrow Doodle */}
        <div className="doodle">
          <svg width="90%" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {/* Curved Arrow Path */}
            <path
              d="M10 50 C 30 30, 70 30, 90 50 S 110 70, 100 50"
              fill="none"
              stroke="black"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="200"
              stroke-dashoffset="200"
              className="doodlePath"
            />
            {/* Arrowhead to create the arrow mark effect */}
            <polygon points="92,49 98,53 92,57" fill="black" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
