import React from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  return (
    <div className="nav-container" style={{ display: "flex" }}>
      <Link
       className="nav-item"
     
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About
      </Link>
      <Link
       className="nav-item"
        
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Projects
      </Link>
      
    </div>
  );
};

export default Navbar;
