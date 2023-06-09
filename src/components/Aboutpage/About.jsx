import React from "react";
import {Heading} from "../../components";
import profile from "../../assets/images/profileimage.jpeg";
import { technologies } from "../../ultilities/technologies";
import "./About.css";

const About = () => {
  return (
    <section id="/about" className="about-container">
      <Heading number={"01"} text={"About Me"} empty_div={""} />
      <div className="about-global-container">
        <div className="content-section">
          <p className="hero-description">
            Hello! My name is Ibelachi Chinedu Franklyn. I have this passion for
            everything coding, and I derive joy creating a sense of experience
            and satisfaction when creating beautiful looking web pages and
            bringing beautiful designs to life, looking forward to growing in
            knowledge of the tech industry. My interest in web development
            started back in 2018 when I built my first web page with HTML and
            CSS which opened my eyes to a greater world of endless
            possibilities.
          </p>
          <p className="hero-description">
            Fast-forward to today, and I’ve had the privilege of interning at{" "}
            <a
              href="https://www.genesystechhub.com/"
              target="_blank"
              rel="noreferrer"
              className="upstatement"
            >
              Genesys
            </a> Tech Hub Enugu, 
            one of the most prominent start-ups in the South east Nigeria, a
            huge corporation, focused on impacting in young techies and
            entrepreneurs. Although not working with any Tech company at the
            moment my main focus these days is building accessible, inclusive
            products and digital experiences for a variety of users.
          </p>
          {/* <p className="hero-description">
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React
          </p> */}
          <span className="hero-description">
            Here are a few technologies I’ve been working with recently:
          </span>
          <div className="technologies">
            <ul className="tech-skills">
              {technologies.map((item, index) => {
                return (
                  <li className="individual-technologies" key={index}>
                    <span></span> {item.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={profile} alt="profile-display" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
