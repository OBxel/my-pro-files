import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact="true"
            to="/home"
            className="NavLink"
            activeclassname="active"
          >
            Home
          </NavLink>
        </li>
        <div className="rightLinks">
          <li>
            <NavLink
              to="/projects"
              className="NavLink"
              activeclassname="active"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="NavLink" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
