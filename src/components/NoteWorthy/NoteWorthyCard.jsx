import { FiGithub } from "react-icons/fi";
import { ImFileEmpty } from "react-icons/im";
import { HiOutlineExternalLink } from "react-icons/hi";
import { NoteWorthyAnchor } from "../../components";
import "./NoteWorthy.css";

const NoteWorthyCard = (props) => {
  const { goto, href, externalLink, title, description, lists, id } =
    props.note;
  return (
    <a
      href={goto}
      target="_blank"
      rel="noopener noreferrer"
      key={id}
      className="individual-notes"
    >
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
        {lists.map((list, index) => (
          <span key={index}>{list}</span>
        ))}
      </footer>
    </a>
  );
};

export default NoteWorthyCard;
