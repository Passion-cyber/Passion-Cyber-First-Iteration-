import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="Contact" className="contact-container">
      <div className="contact-inner">
        <h1
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Contact Me
        </h1>
        <h2
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Let's Get In Touch
        </h2>
        <p
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-once="true"
        >
          I am actively looking forward to great collaborations, and would be
          glad to discuss and build something together. Have any project in
          mind? Let’s talk about it.
        </p>
        <a
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-once="true"
          href="mailto:chineduibelachi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-anchor"
        >
          Send Me a Mail
        </a>
      </div>
    </section>
  );
};

export default Contact;
