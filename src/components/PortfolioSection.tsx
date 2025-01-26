import React from "react";
import Slider from "react-slick"; // React Slick for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PortfolioSection.css";
import poster from "../assets/4.jpg"; // Adjust the path as necessary

const PortfolioSection: React.FC = () => {
  const projects = [
    { title: "Branding", image: poster },
    { title: "Websites", image: poster },
    { title: "Poster Designs", image: poster },
    { title: "Poster Designs", image: poster },
  ];

  const settings = {
    dots: true, // Enables navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">Our Projects</h2>
      <div className="portfolio-carousel">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="portfolio-slide">
              <img src={project.image} alt={project.title} className="doodle-image" />
              <h3 className="doodle-title">{project.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PortfolioSection;
