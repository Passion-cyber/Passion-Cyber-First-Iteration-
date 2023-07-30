import React from "react";
import {
  HeroSection,
  About,
  Experience,
  NoteWorthy,
  Contact,
  Projects,
} from "../../components";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <NoteWorthy />
      <Contact />
    </div>
  );
};

export default Homepage;
