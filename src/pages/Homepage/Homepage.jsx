import React from "react";
import {
  HeroSection,
  About,
  Experience,
  NoteWorthy,
  Contact,
} from "../../components";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Experience />
      <NoteWorthy />
      <Contact />
    </div>
  );
};

export default Homepage;
