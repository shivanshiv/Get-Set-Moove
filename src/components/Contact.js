import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-info-centered">
          <div className="contact-item">
            <h3>Phone</h3>
            <p>(250)-879-3022</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>getsetmoove@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;