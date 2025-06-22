import React from "react";
import "./PortfolioSection.css";

const PortfolioSection: React.FC = () => {
  const projects = [
    { url: "https://www.sabuildingsolutions.in/", name: "SA Building Solutions" },
    { url: "https://www.digitalpowertech.in/", name: "Digital PowerTech" },
    { url: "https://example.com", name: "Client Site" },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">Our Projects</h2>
      <div className="portfolio-scroll-container">
        {projects.map((project, index) => (
          <div key={index} className="iframe-wrapper">
            <div className="overlay">{project.name}</div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="click-layer"
              aria-label={`Visit ${project.name}`}
            ></a>
            <iframe
              src={project.url}
              title={`project-${index}`}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
