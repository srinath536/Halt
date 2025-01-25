import React from "react";
import './ContactUs.css';

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>We're here to assist! Send us an email with any questions or inquiries.</p>
        
        {/* Mailto link that opens the user's email client */}
        <a href="mailto:halt@gmail.com?subject=Inquiry&body=Hi, I would like to...">
          <button className="send-email-btn">Send Email</button>
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
