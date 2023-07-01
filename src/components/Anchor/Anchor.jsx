import "./Anchor.css";

const Anchor = ({ text, link, target, rel }) => {
  return (
    <a href={link} target={target} rel={rel} className="global-links">
      {text}
    </a>
  );
};

export default Anchor;
  