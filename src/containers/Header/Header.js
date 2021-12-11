import React from "react";
import "./Header.css";
import github from '../../assets/github.svg'
import link from '../../assets/link.svg'
import Navbar from "../navbar/Navbar";
import guy from '../../assets/guy.svg'
const Header = () => {
  const handleGithubClick = ()=> {
      window.location = "https://github.com/SebastianDrozd"
  }
  const handleLinkedInClick = () => {
    window.location = "https://www.linkedin.com/in/sebastian-drozd-b13bb8195/"
  }
  return (
    <div className="content" style={{ display: "flex" }}>
      <div className="container-left">
        <div className="container-text">
          <p className="left-hi">Hi, <span className="left-hi2">I'm</span></p>
          <p className="left-name">Sebastian Drozd</p>
          <p className="left-overview">Full Stack Developer / Freelancer</p>
        
        </div>
        <div className="header-icons">
        <img onClick={handleGithubClick} src={github} alt="" />
        <img onClick={handleLinkedInClick} src={link} alt="" />
        </div>
      </div>
      <div className="container-right">
          <Navbar/>
          <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
          <img src={guy} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Header;
