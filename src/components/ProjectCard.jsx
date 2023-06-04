// import React, { useState } from "react";
import Anchor from "./Anchor";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import Headshot from "../assets/profileimage.jpeg";
import "../stylesheets/ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="grid-2">
      <article className="grid-content">
        <h1 className="featured">Featured Project</h1>
        <p className="header">Halycon Theme</p>
        <div className="description">
          <p>
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
            and more. Available on Visual Studio Marketplace, Package Control,
            Atom Package Manager, and npm.
          </p>
        </div>
        <span>VS Code</span>
        <span>Sublime Text</span>
        <span>Atom</span>
        <span>iTerm 2</span>
        <span>Hyper</span>
        <div className="links">
          <Anchor text={<BiLinkExternal />} />
          <Anchor text={<FiGithub />} />
        </div>
      </article>
      <div className="image-content">
        <img src={Headshot} alt="background project" />
      </div>
    </div>
  );
};

export default ProjectCard;
