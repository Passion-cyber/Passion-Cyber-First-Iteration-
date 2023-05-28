import React from "react";
import HeroSection from "../../components/HeroSection";
import About from "../Aboutpage/About";
import Experience from "../../components/Experience";

// import LeftSocials from "../../components/LeftSocials";
// import RightSocials from "../../components/RightSocials";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      {/* <RightSocials />
      <LeftSocials /> */}
      <About/>
      <Experience/>
    </div>
  );
};

export default Homepage;
