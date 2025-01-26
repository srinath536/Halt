import React, { useEffect } from "react";
import "./ServicesSection.css";

const services = [
  {
    id: "website-development",
    icon: "https://cdn-icons-png.flaticon.com/512/7376/7376349.png",
    title: "Web Application",
    description: "Custom web applications and responsive websites",
  },
  {
    id: "tailored-solutions",
    icon: "https://cdn-icons-png.flaticon.com/512/3050/3050424.png",
    title: "Tailored Solutions",
    description: "Solutions designed to meet your unique business needs",
  },
  {
    id: "digital-marketing",
    icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    title: "Digital Marketing",
    description: "Reach your audience effectively through digital campaigns.",
  },
  {
    id: "ui-ux-design",
    icon: "https://cdn-icons-png.flaticon.com/512/2165/2165698.png",
    title: "Poster Design & Branding",
    description: "Professional posters and creative branding to help you stand out",
  },
];

const ServicesSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      {
        threshold: 0.2, // Trigger animation when 20% of the element is visible
      }
    );

    const elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup the observer on component unmount
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Tailored solutions to enhance your business.</p>
      </div>

      <div className="services-container">
        {services.map((service) => (
          <div
            className="service-card hidden" // Initial hidden class
            key={service.id}
            id={service.id}
          >
            <div className="service-card-header">
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
              />
            </div>
            <div className="service-card-body">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
