import React from "react";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-container">
      <Heading number={"03"} text={"Projects I've Worked on"} />
      <div className="projects-global-container">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
