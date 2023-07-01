import React from "react";
import "./Contact.css";
import { Button } from "../../components";

const Contact = () => {
  const customStyles = {
    padding: "2.5rem 4.5rem",
  };
  return (
    <section className="contact-container">
      <div className="contact-inner">
        <h1>05. Whats Next?</h1>
        <h2>Get In Touch</h2>
        <p>
          I am looking forward to great collaborations, and would be glad to
          discuss and build something together. Have any project in your mind?
          Let’s discuss the project.
        </p>
        <Button style={customStyles} text={"Send a mail"} />
      </div>
    </section>
  );
};

export default Contact;
