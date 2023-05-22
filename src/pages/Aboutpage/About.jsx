import React from "react";
import Heading from "../../components/Heading"
import Anchor from "../../components/Anchor"

const About = () => {
  return (
    <section className="container">
      <div className="content-section">
        <Heading number={"01"} text={"About Me"} empty_div={""} />
        <p className="first-paragraph">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p className="second-paragraph">
          Fast-forward to today, and I’ve had the privilege of working at{" "}
          <Anchor path={"/https://open.spotify.com/search/Nf%20Dreams"}
            text={"an advertising angency"}
          />
          , a start-up, a huge corporation, and a student-led design studio. My
          main focus these days is building accessible, inclusive products and
          digital experiences at Upstatement for a variety of clients.
        </p>
        <p className="third-paragraph">
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React
        </p>
        <span>
          Here are a few technologies I’ve been working with recently:
        </span>
      </div>

      <div className="image-container"></div>
    </section>
  );
};

export default About;
