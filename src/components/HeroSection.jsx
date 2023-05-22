import "../stylesheets/HeroSection.css";
import { Link } from "react-router-dom";
import Button from "./Button";


const HeroSection = () => {
  // const customStyles = {
  //   padding: '2rem 4.5rem',
  // };
  return (
    <section className="hero-container">
      <div className="hero-container">
        <h2 className="intro">Hi, my name is </h2>
        <h1>
          Ibelachi Chinedu. <br /> <span>I build things for the web.</span>
        </h1>
        <p className="hero-description">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at <a href="https://www.genesystechhub.com/" target="_blank"  rel="noreferrer" className="upstatement">Genesys</a>.
        </p>
        <Link to="/resume"><Button text="Check out my course!"/></Link>
      </div>
    </section>
  );
};

export default HeroSection;
