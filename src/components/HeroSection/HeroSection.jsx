import "./HeroSection.css";
import { resumeLink, Button } from "../../components";

const HeroSection = () => {
  const customStyles = {
    padding: "2rem 4.5rem",
  };

  return (
    <section className="hero-container">
      <h2 className="intro">Hi, my name is </h2>
      <h1>
        Ibelachi Chinedu. <br /> <span>I build things for the web.</span>
      </h1>
      <p className="hero-description">
        I’m a software engineer specializing in building exceptional digital
        experiences. Currently, I’m an Intern of{" "}
        <a
          href="https://www.genesystechhub.com/learnable"
          target="_blank"
          rel="noreferrer"
          className="upstatement"
        >
          Learnable 22
        </a>{" "}
        at{" "}
        <a
          href="https://www.genesystechhub.com/"
          target="_blank"
          rel="noreferrer"
          className="upstatement"
        >
          Genesys
        </a>
        Tech Hub Enugu. In general I enjoy creating things that live on the
        internet!
      </p>
      <a href={resumeLink} target="_blank" rel="noreferrer">
        <Button style={customStyles} text="Check Out My Resume!" />
      </a>
    </section>
  );
};

export default HeroSection;
