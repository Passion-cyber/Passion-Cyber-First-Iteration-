import { FiGithub } from "react-icons/fi";
import { ImFileEmpty } from "react-icons/im";
import { HiOutlineExternalLink } from "react-icons/hi";
import { notes, NoteWorthyAnchor } from "../../components";
import "./NoteWorthy.css";

const NoteWorthyCard = () => {
  return (
    <div className="noteworthy-inner">
      {notes.map(({ href, externalLink, title, description, lists, id }) => {
        return (
          <div key={id} className="individual-notes">
            <div className="links">
              <ImFileEmpty className="file" />
              <div className="links-inner">
                <NoteWorthyAnchor
                  className="git"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  children={<FiGithub />}
                />
                <NoteWorthyAnchor
                  className="git"
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  children={<HiOutlineExternalLink />}
                />
              </div>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <footer>
              {lists.map(({ list }, index) => (
                <span key={index}>{list}</span>
              ))}
            </footer>
          </div>
        );
      })}
    </div>
  );
};

export default NoteWorthyCard;
