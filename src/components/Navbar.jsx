import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItem } from "../ultilities/ultilities";
import "../stylesheets/Navbar.css";
import Button from "./Button";

const Navbar = () => {
  const [navopen, setNavOpen] = useState(false);
  return (
    <section className="header">
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/"> Passion-<span>Cyber</span></Link>
        </div>
        <nav className={`navigation ${navopen && "ovelay mobile"}`}>
          {navItem.map((item, index) => (
            
        <Link key={index} to={item.path}>{item.number}<span>{item.text}</span></Link>
          ))}
          <Link to="/resume"><Button text="Resume"/></Link>
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
