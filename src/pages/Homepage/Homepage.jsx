import React from "react";
import HeroSection from "../../components/HeroSection";
import About from "../Aboutpage/About";
import Experience from "../../components/Experience";
import NoteWorthy from "../../components/NoteWorthy";
import Contact from "../../components/Contact";
// import Projects from "../../components/Projects";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Experience />
      {/* <Projects /> */}
      <NoteWorthy />
      <Contact />
    </div>
  );
};

export default Homepage;
