import React from "react";
import './ContactUs.css';
import contactImage from "../assets/contact.png"; // Import your image

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        <img src={contactImage} alt="Contact Us" className="contact-image" />
        <div className="contact-text-container">
          <h2>Contact Us</h2>
          <p>
            Just give us a call, and we'll put everything in a box and deliver
            it to you!
          </p>
          <p>For further inquiries, feel free to reach us at any time.</p>
          <a href="mailto:halt@gmail.com?subject=Inquiry&body=Hi, I would like to...">
            <button className="send-email-btn">Send Email</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
