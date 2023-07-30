import "./HeroSection.css";
import { resumeLink, Button } from "../../components";

const HeroSection = () => {
  const customStyles = {
    padding: "2rem 4.5rem",
  };

  return (
    <section
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      data-aos="fade-up"
      data-aos-delay="700"
      data-aos-once="true"
      className="hero-container"
    >
      <h2 className="intro">Hey, I'm</h2>
      <h1>
        Ibelachi Chinedu. <br /> <span>I Just want to build stuffs.</span>
      </h1>
      <p className="hero-description">
        A skilled Software Developer specializing in crafting outstanding
        digital experiences and building cross-functional web applications. With
        a passion for frontend development, I take pride in bringing innovative
        designs to life and delivering seamless user experiences.
      </p>
      <a href={resumeLink} target="_blank" rel="noreferrer">
        <Button style={customStyles} text="Check Out My Resume!" />
      </a>
    </section>
  );
};

export default HeroSection;
// Explore my
// projects to witness how I combine creativity and technical expertise to
// build captivating web solutions that leave a lasting impression.
