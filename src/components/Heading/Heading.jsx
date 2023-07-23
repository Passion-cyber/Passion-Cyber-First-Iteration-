import React from "react";
import "./Heading.css";

const Heading = ({ number, text, empty_div }) => {
  return (
    <div
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
      data-aos="fade-up"
      data-aos-once="true"
      className="heading-container"
    >
      <span className="number">{number}</span>
      <h1 className="heading-text">{text}</h1>
      <div className="empty_div">{empty_div}</div>
    </div>
  );
};

export default Heading;
