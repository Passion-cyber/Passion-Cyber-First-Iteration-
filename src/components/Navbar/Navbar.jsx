import React, { useState } from "react";
import { navItem } from "../../ultilities/ultilities";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  const [navopen, setNavOpen] = useState(false);

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
            <Link key={index} to={path} duration={3000}>
              {number}
              <span>{text}</span>
            </Link>
          ))}
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
