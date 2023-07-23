import React, { useState } from "react";
import { Heading, Anchor } from "../../components";
import info from "../../ultilities/data.json";
import "./Experience.css";

const Experience = () => {
  const [data] = useState(info);
  const [value, setValue] = useState(0);
  const { heading, link, text, lists } = data[value];

  return (
    <section id="Experience" className="experience-container">
      <Heading number={"02"} text={"Where I've worked"} />
      <div className="experience-global-container">
        <div className="left-experience">
          <div className="scroll-bar"></div>
          <div className="btn-container">
            {data.map((item, index) => {
              return (
                <button
                  onClick={() => setValue(index)}
                  className={`exp-btn ${index === value && "active-btn"}`}
                  key={item.order}
                >
                  {item.button}
                </button>
              );
            })}
          </div>
        </div>
        <div className="right-experience">
          <div className="individual-exps">
            <h2>
              {heading}{" "}
              <span>
                <Anchor
                  className="git"
                  href="https://web.facebook.com/ibelachi.chinedu"
                  target="_blank"
                  rel="noopener noreferrer"
                  children={link}
                />
              </span>
            </h2>
            <p>{text}</p>
            {lists.map((list, index) => {
              return (
                <li key={index}>
                  {" "}
                  <span></span> {list}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
