import "./NoteWorthyAnchor.css";

const NoteWorthyAnchor = ({ href, target, rel, children, style }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={style}
      className="noteWorthyLinks"
    >
      {children}
    </a>
  );
};

export default NoteWorthyAnchor;
