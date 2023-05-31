import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItem } from "../ultilities/ultilities";
import { HashLink } from "react-router-hash-link";
import "../stylesheets/Navbar.css";
import Button from "./Button";

const Navbar = () => {
  const [navopen, setNavOpen] = useState(false);

  const customStyles = {
    padding: "1.5rem 4.5rem",
  };
  return (
    <section className="header">
      <div className={`overlay ${navopen && "open"} `}></div>
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/">
            {" "}
            Passion-<span>Cyber</span>
          </Link>
        </div>
        <nav className={`navigation ${navopen && "mobile"}`}>
          {navItem.map(({ path, number, text }, index) => (
            <HashLink key={index} smooth to={path}>
              {number}
              <span>{text}</span>
            </HashLink>
          ))}
          <Link to="/resume">
            <Button style={navopen ? customStyles : null} text="Resume" />
          </Link>
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
