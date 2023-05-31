// import React, { useState } from "react";
import "../stylesheets/ProjectCard.css";
import Anchor from "./Anchor";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <div className="grid-2">
      <div className="grid-content">
        <article className="content-inner">
          <h2 className="featured">Featured Project</h2>
          <h1 className="header">Halycon Theme</h1>
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
      </div>
      <div className="image-content"></div>
    </div>
  );
};

export default ProjectCard;
