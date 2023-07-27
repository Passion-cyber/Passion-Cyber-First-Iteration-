import { NoteWorthyAnchor } from "../../components";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

import "./ProjectCard.css";

const ProjectCard = ({ projectNote }) => {
  const {
    profileImage,
    liveLink,
    externalLink,
    featured,
    heading,
    paragraph,
    lists,
  } = projectNote;
  return (
    <div className="gridContainer">
      <div className="projectImageContainer">
        <img src={profileImage} alt="img" />
      </div>
      <div className="gridContent">
        <div>
          <h1>{heading}</h1>
          <p>{featured}</p>
        </div>
        <div className="description">
          <p>{paragraph}</p>
        </div>
        <div className="spanContainer">
          {lists.map((list, index) => {
            return <span key={index}>{list}</span>;
          })}
        </div>

        <div className="links">
          <NoteWorthyAnchor
            className="git"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            children={<BiLinkExternal />}
          />
          <NoteWorthyAnchor
            className="git"
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            children={<FiGithub />}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
