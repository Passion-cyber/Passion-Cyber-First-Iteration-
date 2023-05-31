import React from "react";
import "../stylesheets/Contact.css";
// import Heading from "./Heading";
import Button from "./Button";

const Contact = () => {
  const customStyles = {
    padding: "2.5rem 4.5rem",
  };
  return (
    <section className="contact-container">
      {/* <Heading number={"05"} text={"Whats next?"} /> */}
      <div className="contact-inner">
        <h2>Get In Touch</h2>
        <p>
          I am looking for great collaborations, let’s discuss and build
          something togethe
        </p>
        <span>Have any project in your mind? Let’s discuss the project</span>
        <Button style={customStyles} text={"Send a mail"} />
      </div>
    </section>
  );
};

export default Contact;
