import React from "react";
import "../stylesheets/Heading.css";

const Heading = ({ number, text, empty_div }) => {
  return (
    <div className="heading-container">
      <span className="number">{number}</span>
      <h1 className="heading-text">{text}</h1>
      <div className="empty_div">{empty_div}</div>
    </div>
  );
};

export default Heading;
