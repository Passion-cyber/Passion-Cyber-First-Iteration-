import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItem } from "../../ultilities/ultilities";
import "./Navbar.css";
import Button from "../../components/Button/Button";
import { resumeLink } from "../../components";

const Navbar = () => {
  const [navopen, setNavOpen] = useState(false);

  const customStyles = {
    padding: "1.5rem 4.5rem",
  };
  return (
    <section className="header">
      <div
        onClick={() => {
          setNavOpen(false);
        }}
        className={`overlay ${navopen && "open"} `}
      ></div>
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/">
            Passion-<span>Cyber</span>
          </Link>
        </div>
        <nav className={`navigation ${navopen && "mobile"}`}>
          {navItem.map(({ path, number, text }, index) => (
            <Link key={index} to={path}>
              {number}
              <span>{text}</span>
            </Link>
          ))}
          <a href={resumeLink} target="_blank" rel="noreferrer">
            <Button style={navopen ? customStyles : null} text="Resume" />
          </a>
        </nav>

        <div className="toggle-menu" onClick={() => setNavOpen(!navopen)}>
          <div className={`burger ${navopen && "one"}`} />
          <div className={`burger ${navopen && "two"}`} />
          <div className={`burger ${navopen && "three"}`} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
