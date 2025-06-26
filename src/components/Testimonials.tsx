// Testimonial.tsx
import React from "react";
import "./Testimonials.css";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Srinivasan",
    role: "Secretary, Kandigai",
    message:
      "Exceptional service! Their SaaS product helped streamline our internal processes flawlessly. Highly recommend H-alt."
  },
  {
    name: "Radhakrishnan",
    role: "ICI Secretary, Chennai",
    message:
      "Top-notch development team. Delivered on time and exceeded expectations."
  },
  {
    name: "Prabu Narayanan",
    role: "Urban Housing Infra",
    message:
      "Great design, responsive communication, and a scalable solution. Thank you team H-alt!"
  },
  {
    name: "Karthick",
    role: "Adangalur Gate",
    message:
      "Their creativity and tech expertise made a real difference in our branding."
  }
];

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-heading">
        <h2>What Our Clients Say</h2>
      </div>
      <div className="testimonial-slider">
        <div className="testimonial-track">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <FaUserCircle className="user-icon" />
              <p className="message">"{testimonial.message}"</p>
              <div className="author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;