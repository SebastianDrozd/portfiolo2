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
                    <p className="card-description">I specialized in frontend development which is pretty cool but kinda gay at the same time what do you think you sup homie bro yo whatsup</p>
                </div>
            </div>
            <div id='card2'  className='content-card'>
                <div className='card-logo'>
                    <img src={back} alt="" />
                </div>
                <div className='card-content'>
                    <p className='card-title'>Backend Development</p>
                    <p className="card-description">I specialized in frontend development which is pretty cool but kinda gay at the same time what do you think you sup homie bro yo whatsup</p>
                </div>
            </div>
            <div id='card3'  className='content-card'>
                <div className='card-logo'>
                    <img src={net} alt="" />
                </div>
                <div className='card-content'>
                    <p className='card-title'>Network Security</p>
                    <p className="card-description">I specialized in frontend development which is pretty cool but kinda gay at the same time what do you think you sup homie bro yo whatsup</p>
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default About
