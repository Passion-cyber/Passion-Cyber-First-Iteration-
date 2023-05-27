import "../stylesheets/Button.css";
const Button = ({style, text}) => {
  return <button  style={style} className="primary-btn">{text}</button>;
};

export default Button;
