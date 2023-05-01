import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "../stylesheets/Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/">
            Passion-<span>Cyber</span>
          </Link>
        </div>
        <nav className="navigation">
          <GrClose className="close-btn" />

          <Link to="/about">
            01.<span>About</span>
          </Link>
          <Link to="/about">
            02.<span>Experience</span>
          </Link>
          <Link to="/about">
            03.<span>Work</span>
          </Link>
          <Link to="/about">
            04.<span>Contact</span>
          </Link>
          <Link to="/about">
            <button className="primary-button">Resume</button>
          </Link>
        </nav>
        <div className="open-btn"><GiHamburgerMenu id="open" /></div>
      </div>
    </div>
  );
};

export default Navbar;
