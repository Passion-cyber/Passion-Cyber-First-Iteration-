import "./HeroSection.css";
import { resumeLink, Button, Anchor } from "../../components";

const HeroSection = () => {
  const customStyles = {
    padding: "2rem 4.5rem",
  };

  return (
    <section className="hero-container">
      <h2
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="700"
        data-aos-once="true"
        className="intro"
      >
        Hey, I'm
      </h2>
      <h1
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="750"
        data-aos-once="true"
      >
        Ibelachi Chinedu. <br /> <span>I build things for the web.</span>
      </h1>
      <p
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-once="true"
        className="hero-description"
      >
        A Software Developer specializing in building exceptional digital
        experiences and cross functional web applications. Currently i'm an
        intern at the
        <Anchor
          href="https://www.genesystechhub.com/learnable"
          target="_blank"
          rel="noreferrer"
          className="upstatement"
          children={"Learnable 22"}
        />
        internship program championed by
        <Anchor
          href="https://www.genesystechhub.com/"
          target="_blank"
          rel="noreferrer"
          className="upstatement"
          children={"Genesys"}
        />
        Tech Hub Enugu.
      </p>
      <a
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="850"
        data-aos-once="true"
        href={resumeLink}
        target="_blank"
        rel="noreferrer"
      >
        <Button style={customStyles} text="Check Out My Resume!" />
      </a>
    </section>
  );
};

export default HeroSection;
