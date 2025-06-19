import React from "react";
import "./PortfolioSection.css";

const PortfolioSection: React.FC = () => {
  const projects = [
    { url: "https://example.com" },
    { url: "https://example.com" },
    { url: "https://example.com" },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">Our Projects</h2>
      <div className="portfolio-scroll-container">
        {projects.map((project, index) => (
          <div key={index} className="iframe-wrapper">
            <iframe
              src={project.url}
              title={`project-${index}`}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
