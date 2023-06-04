import React from "react";
import Heading from "../../components/Heading";
import Anchor from "../../components/Anchor";
import profile from "../../assets/images/profileimage.jpeg";
import { technologies } from "../../ultilities/technologies";
import "../../stylesheets/About.css";

const About = () => {
  return (
    <section id="/about" className="about-container">
      <Heading number={"01"} text={"About Me"} empty_div={""} />
      <div className="about-global-container">
        <div className="content-section">
          <p className="hero-description">
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p className="hero-description">
            Fast-forward to today, and I’ve had the privilege of working at{" "}
            <Anchor
              href={"https://react-icons.github.io/react-icons/"}
              text={"an advertising angency"}
              target={"_blank"}
              rel={"noreferrer"}
            />
            , a start-up, a huge corporation, and a student-led design studio.
            My main focus these days is building accessible, inclusive products
            and digital experiences at Upstatement for a variety of clients.
          </p>
          <p className="hero-description">
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React
          </p>
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
