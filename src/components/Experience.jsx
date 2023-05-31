import React, {useState} from "react";
import "../stylesheets/Experience.css";
import Heading from "../components/Heading";
import info from "../ultilities/data.json"
import Anchor from "./Anchor";


const Experience = () => {
    const [data, setData] = useState(info);
    const [value, setValue] = useState(0);
    const {heading, link, text, lists} = data[value]

  return (
    <section className="experience-container">
      <Heading number={"02"} text={"Where I've worked"} />
      <div className="experience-global-container">
      <div className="left-experience">
        <div className="scroll-bar"></div>      
        <div className="btn-container">
            {
                data.map((item, index) => {
                    return(<button onClick={() => setValue(index)} className={`exp-btn ${index === value && "active-btn"}`} key={item.order}> {item.button}</button>)
                })
            }
        </div>

      </div>
      <div className="right-experience">
        <div className="individual-exps">
            <h2>{heading} <span><Anchor text={link}/></span></h2>
            <p >{text}</p>
            {
             lists.map((list,index) => {
                 return(<li key={index}> <span></span> {list}</li>)
                     })
            }
        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


