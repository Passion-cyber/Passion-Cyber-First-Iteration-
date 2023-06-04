import React from "react";
import HeroSection from "../../components/HeroSection";
import About from "../Aboutpage/About";
import Experience from "../../components/Experience";
import NoteWorthy from "../../components/NoteWorthy";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects";

// import LeftSocials from "../../components/LeftSocials";
// import RightSocials from "../../components/RightSocials";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      {/* <RightSocials />
      <LeftSocials /> */}
      <About />
      <Experience />
      <Projects />
      <NoteWorthy />
      <Contact />
    </div>
  );
};

export default Homepage;
