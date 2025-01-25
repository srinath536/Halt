import React, { useState } from "react";
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
