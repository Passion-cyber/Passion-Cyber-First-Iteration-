import "./Anchor.css";

const Anchor = ({ href, target, rel, children, style }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={style}
      className="global-links"
    >
      {children}
    </a>
  );
};

export default Anchor;
