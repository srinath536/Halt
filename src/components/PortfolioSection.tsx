import React from "react";
import "./PortfolioSection.css";

const websites = [
  { name: "SA Building Solutions", url: "https://www.sabuildingsolutions.in/" },
  { name: "Digital PowerTech", url: "https://www.digitalpowertech.in/" },
  { name: "Client Site", url: "https://example.com" },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">Our Portfolio</h2>

      <div className="portfolio-websites">
        {websites.map((site, index) => (
          <a
            key={index}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="website-card"
          >
            <span className="website-name">{site.name}</span>
            <span className="external-icon">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
