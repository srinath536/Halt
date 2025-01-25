import React from "react";
import './PortfolioSection.css';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">Placeholder Image 1</div>
        <div className="portfolio-item">Placeholder Image 2</div>
        <div className="portfolio-item">Placeholder Image 3</div>
      </div>
    </section>
  );
};

export default PortfolioSection;
