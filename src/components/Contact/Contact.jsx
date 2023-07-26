import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="Contact" className="contact-container">
      <div
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos="fade-up"
        data-aos-once="true"
        className="contact-inner"
      >
        <h1>Contact Me</h1>
        <h2>Let's Get In Touch</h2>
        <p>
          I am actively looking forward to great collaborations, and would be
          glad to discuss and build something together. Have any project in
          mind? Let’s talk about it.
        </p>
        <a
          href="mailto:chineduibelachi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-anchor"
        >
          Send Me a Mail
        </a>
      </div>
    </section>
  );
};

export default Contact;
