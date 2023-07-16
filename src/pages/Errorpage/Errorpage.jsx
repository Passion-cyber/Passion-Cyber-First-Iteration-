import { Link } from "react-router-dom";
import { Button } from "../../components";
import ErrorImage from "../../assets/images/404.svg";
import "./Errorpage.css";

const Errorpage = () => {
  const customStyles = {
    padding: "2rem 7rem",
  };

  return (
    <section className="errorContainer">
      <img src={ErrorImage} alt="erroImage" />
      <div className="errorContent">
        <p className="errorHeading">Oops!</p>
        <div className="errorContent">
          <p className="errorText">
            We are sorry, but we can't find the page you are looking for.
          </p>
          <Link to={"/"}>
            <Button style={customStyles} text="Back To Home" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Errorpage;
