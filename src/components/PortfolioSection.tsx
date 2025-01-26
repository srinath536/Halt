import React, { useEffect, useRef, useState } from "react";
import "./PortfolioSection.css";
import poster1 from "../assets/1.jpg";
import poster2 from "../assets/2.jpg";
import poster3 from "../assets/3.jpg";
import poster4 from "../assets/4.jpg";
import poster5 from "../assets/1.jpg";
import poster6 from "../assets/2.jpg";
import poster7 from "../assets/3.jpg";
import poster8 from "../assets/4.jpg";

const PortfolioSection: React.FC = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const projects = [
    { name: "Poster Design", image: poster1 },
    { name: "Website Development", image: poster2 },
    { name: "Brand Identity", image: poster3 },
    { name: "Solution Architecture", image: poster4 },
    { name: "UI/UX Design", image: poster5 },
    { name: "Mobile App Development", image: poster6 },
    { name: "E-commerce Solutions", image: poster7 },
    { name: "AI-Powered Tools", image: poster8 },
  ];

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!portfolioRef.current || isScrolling) return;
      setIsScrolling(true);

      const scrollContainer = portfolioRef.current;
      const itemWidth = scrollContainer.offsetWidth;

      const scrollAmount = e.deltaY > 0 ? itemWidth : -itemWidth;
      const newScrollPosition = Math.round((scrollContainer.scrollLeft + scrollAmount) / itemWidth) * itemWidth;

      scrollContainer.scrollTo({ left: newScrollPosition, behavior: "smooth" });

      setTimeout(() => setIsScrolling(false), 500); // Prevent further scroll until the animation completes
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isScrolling]);

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">Our Work</h2>
      <div ref={portfolioRef} className="portfolio-carousel">
        {projects.map((project, index) => (
          <div
            key={index}
            className="portfolio-item"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
