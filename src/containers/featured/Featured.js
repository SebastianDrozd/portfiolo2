import React, { useEffect } from 'react'
import './Featured.css'
import cap from '../../assets/cap.PNG'
import cap20 from '../../assets/cap20.PNG'
const Featured = () => {
    useEffect(()=> {
        
    },[])

    const handleViewCode = () => {
        window.location = "https://github.com/SebastianDrozd/Snippitzfrontend"
    }
    return (
        <div className='featured-main-container'>
            
                <div className="featured-texts">
                    <p className='feat-project'>Featured Project</p>
                    <p className='feat-title'>Snippitz.io Web Application</p>
                    <p className='feat-description'>A full-stack application built using React, Spring Boot, and Jwt for authentication. Allows for the creation and publishing of code snippits.</p>
                   <div className='feat-bottom'>
                    <a href="https://snippitzfrontend.herokuapp.com/" className='feat-site'>View Live Site</a>
                    <button onClick={handleViewCode} className="featured-butt">{" </>"}</button>
                    </div>
                </div>
                <div className="featured-image">
                    <img id="featured-image" src={cap20} alt="" />
                </div>
            
        </div>
    )
}

export default Featured
