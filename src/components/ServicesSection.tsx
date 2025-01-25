import React from "react";
import './ServicesSection.css';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-cards">
        <div className="card">
          <img src="/biometric-icon.png" alt="Biometrics" />
          <h3>Biometric Solutions</h3>
          <p>From attendance tracking to gym member management, we design systems that fit your needs.</p>
        </div>
        <div className="card">
          <img src="/website-icon.png" alt="Website Development" />
          <h3>Website Development</h3>
          <p>Custom-built websites to enhance your online presence with dynamic, user-friendly designs.</p>
        </div>
        <div className="card">
          <img src="/design-icon.png" alt="Poster Design & Branding" />
          <h3>Poster Design & Branding</h3>
          <p>Professional posters and creative branding to help you stand out.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
