import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { navItem } from "../ultilities/ultilities";
import "../stylesheets/Navbar.css";

const Navbar = () => {
  const [navopen, setNavOpen] = useState(false);
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/"> Passion-<span>Cyber</span></Link>
        </div>
        <nav className="navigation">
          {navItem.map((item, index) => (
        <Link key={index} to={item.path}>{item.number}<span>{item.text}</span></Link>
          ))}
          <Link to="/resume"><button className="primary-button">Resume</button></Link>
        </nav>
        <div
          className="nav-toggle"
          onClick={() => {
            setNavOpen(!navopen);
          }}
        >
          {navopen ? (
            <GrClose id="close-btn" />
          ) : (
            <GiHamburgerMenu id="open-btn" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
