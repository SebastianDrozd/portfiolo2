import React from 'react'
import Featured from '../featured/Featured'
import './About.css'
import front from '../../assets/front.png'
import back from '../../assets/back.png'
import net from '../../assets/net.png'
const About = () => {
    return (
        <div className='about-main-outer'>
            <Featured/>
          
            <div className='about-cards' id="about">
            <div id='card1' className='content-card'>
                <div className='card-logo'>
                    <img src={front} alt="" />
                </div>
                <div className='card-content' >
                    <p className='card-title'>Frontend Development</p>
                    <p className="card-description">I use modern frontend tools to deliver optimal experiences. I am profficient in a wide array of frontend libraries and frameworks such as React and Angular</p>
                </div>
            </div>
            <div id='card2'  className='content-card'>
                <div className='card-logo'>
                    <img src={back} alt="" />
                </div>
                <div className='card-content'>
                    <p className='card-title'>Backend Development</p>
                    <p className="card-description"> My choice of backend always depends on the project. I am available to work in asp.net, spring boot, and express.js as well as other frameworks.</p>
                </div>
            </div>
            <div id='card3'  className='content-card'>
                <div className='card-logo'>
                    <img src={net} alt="" />
                </div>
                <div className='card-content'>
                    <p className='card-title'>Networking</p>
                    <p className="card-description">I also posses years of experience when dealing with commerical and private networks. From advanced firewall configuration to network administration</p>
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default About
