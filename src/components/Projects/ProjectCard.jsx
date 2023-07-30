import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";

import "./ProjectCard.css";

const ProjectCard = ({ projectNote }) => {
  const [navigate, setNavigate] = useState(false);
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
      <div
        onClick={() => setNavigate(!navigate)}
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos="fade-up"
        data-aos-once="true"
        className="projectImageContainer"
      >
        {navigate && (
          <div className="projectNavigtionLinks">
            <div data-aos="zoom-in" className="projectNavigationInner">
              <a
                onClick={() => setNavigate(false)}
                className="git"
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal />
              </a>
              <a
                onClick={() => setNavigate(false)}
                className="git"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        )}
        <img src={profileImage} alt="img" />
      </div>
      <div
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos="fade-up"
        data-aos-once="true"
        className="gridContent"
        onClick={() => setNavigate(false)}
      >
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
      </div>
    </div>
  );
};

export default ProjectCard;
