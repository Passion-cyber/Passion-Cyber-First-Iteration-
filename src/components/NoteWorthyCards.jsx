import React from "react";
import { FiGithub } from "react-icons/fi";
import { ImFileEmpty } from "react-icons/im";
import Anchor from "./Anchor";
import "../stylesheets/NoteWorthy.css";

const NoteWorthyCards = () => {
  return (
    <div className="individual-notes">
      <div className="links">
        <ImFileEmpty className="file" />
        <Anchor text={<FiGithub className="git" />} />
      </div>
      <h3> Modelled a cross functional Spotify Web App for fun!" </h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        tempora sim facilisfacilis repellendus ducimus?
      </p>
      <footer>
        <span>HTML</span>
        <span>CSS/SASS</span>
        <span>Javascript</span>
        <span>React JS</span>
      </footer>
    </div>
  );
};

export default NoteWorthyCards;
