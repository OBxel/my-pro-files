import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={menuOpen ? "active" : ""}>
        <li>
          <NavLink
            exact="true"
            to="/my-pro-files/home"
            className="NavLink"
            activeclassname="active"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <div className="rightLinks">
          <li>
            <NavLink
              to="/my-pro-files/projects"
              className="NavLink"
              activeclassname="active"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-pro-files/contact"
              className="NavLink"
              activeclassname="active"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
