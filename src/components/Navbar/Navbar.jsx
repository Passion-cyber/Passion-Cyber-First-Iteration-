import { useState } from "react";
import { navItem } from "../../ultilities";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [navopen, setNavOpen] = useState(false);

  return (
    <header className="header">
      <div
        onClick={() => {
          setNavOpen(false);
        }}
        className={`overlay ${navopen && "open"} `}
      ></div>
      <div className="header-wrapper">
        <div
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
          className="logo"
        >
          <Link to="/">
            Passion-<span>Cyber</span>
          </Link>
        </div>
        <nav
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos="fade-up"
          data-aos-once="true"
          className={`navigation ${navopen && "mobile"}`}
        >
          {navItem.map(({ path, number, text }, index) => (
            <Link key={index} to={path} duration={3000}>
              {number}
              <span>{text}</span>
            </Link>
          ))}
        </nav>

        <div
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
          className="toggle-menu"
          onClick={() => setNavOpen(!navopen)}
        >
          <div className={`burger ${navopen && "one"}`} />
          <div className={`burger ${navopen && "two"}`} />
          <div className={`burger ${navopen && "three"}`} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
