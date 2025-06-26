import React from "react";
import "./HeroSection.css";
import heroImage from "../assets/hero.webp"; // Update path as per your folder structure

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">We’re H-alt.</h1>
        <p className="hero-subtitle">
          We build sharp SaaS products, fuel brands, and grow digital tribes.
        </p>
       <div className="hero-buttons">
  <a href="#services"><button className="primary">View Services</button></a>
  <a href="#contact"><button className="outline">Contact Us</button></a>
</div>

      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Creative agency concept" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
