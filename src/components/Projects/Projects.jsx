import React from "react";
import { Heading, ProjectCard, projectNotes } from "../../components";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projectsContainer">
      <Heading number={"03"} text={"Projects I've Worked on"} />
      <div className="projectsGlobalContainer">
        {projectNotes.map((projectNote, index) => {
          return <ProjectCard projectNote={projectNote} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
 