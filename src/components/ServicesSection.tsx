import React from "react";
import "./ServicesSection.css";
import { FaCode, FaBullhorn, FaPalette, FaCogs } from "react-icons/fa";

const services = [
  {
    id: "web-dev",
    icon: <FaCode size={40} />,
    title: "Web Applications",
    description: "Clean, high-performance web-based platforms built for speed and scale.",
  },
  {
    id: "solutions",
    icon: <FaCogs size={40} />,
    title: "Tailored Solutions",
    description: "Unique tech tailored to your exact business needs.",
  },
  {
    id: "marketing",
    icon: <FaBullhorn size={40} />,
    title: "Digital Marketing",
    description: "Maximize reach and conversion through targeted campaigns.",
  },
  {
    id: "branding",
    icon: <FaPalette size={40} />,
    title: "Design & Branding",
    description: "Minimalist posters, logos, and branding that make you stand out.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>What We Do</h2>
        <p>Minimal services. Maximum impact.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
