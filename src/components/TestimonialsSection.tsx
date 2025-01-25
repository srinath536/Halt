import React from "react";
import './TestimonialsSection.css';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <blockquote>
        "H-Alt transformed our gym management with a seamless fingerprint system!"
        <footer>- Jane, Gym Owner</footer>
      </blockquote>
      <blockquote>
        "Our new website brought in 30% more online inquiries!"
        <footer>- Mark, Small Business Owner</footer>
      </blockquote>
    </section>
  );
};

export default TestimonialsSection;
