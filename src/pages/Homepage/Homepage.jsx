import React from "react";
import HeroSection from "../../components/HeroSection";
import About from "../../components/About";
// import LeftSocials from "../../components/LeftSocials";
// import RightSocials from "../../components/RightSocials";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      {/* <RightSocials />
      <LeftSocials /> */}
      <About/>
    </div>
  );
};

export default Homepage;
