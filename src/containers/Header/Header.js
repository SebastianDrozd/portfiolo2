import React from "react";
import "./Header.css";
import github from '../../assets/github.svg'
import link from '../../assets/link.svg'
import Navbar from "../navbar/Navbar";
import guy from '../../assets/guy.svg'
const Header = () => {
  return (
    <div className="content" style={{ display: "flex" }}>
      <div className="container-left">
        <div className="container-text">
          <p className="left-hi">Hi, I am</p>
          <p className="left-name">Sebastian Drozd</p>
          <p className="left-overview">Full Stack Developer / Freelancer</p>
        
        </div>
        <div className="header-icons">
        <img src={github} alt="" />
        <img src={link} alt="" />
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
