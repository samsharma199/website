import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="content-section">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-description">
          I would love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hi, feel
          free to reach out.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button className="cta-button" type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
