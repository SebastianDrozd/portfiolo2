import React, { useEffect } from 'react'
import './Websites.css'
import cap8 from '../../assets/cap8.PNG'
import cap7 from '../../assets/cap7.PNG'
import cap9 from '../../assets/cap9.PNG'
import cap21 from '../../assets/cap21.PNG'
import cap11 from '../../assets/cap11.PNG'
import cap12 from '../../assets/cap12.PNG'
import cap13 from '../../assets/cap13.PNG'
const Websites = () => {
    const handleGithubClick = () => {
        window.location = 'https://github.com/SebastianDrozd/modernwebsite2'
    }
    const handleGithubClick2 = () => {
        window.location = 'https://github.com/SebastianDrozd/modernwebsitedesign'
    }
    return (
        <div className='sites-outer-container'>
            <br />
            <br />
           
            <div className="sites-container">
                <div className="site-container">
                <p className="site-top"> Website</p>
                        <p className="site-title">Modern Website</p>
                        
                        <p className='site-description'>A full responsive modern website the abiltty to change uers and do what you please. Full functionis aly islsd with all the hnitgs wyhf one would suspes</p>
                        <div className='feat-bottom' style={{marginTop: '1em'}}>
                    <a style={{marginRight: '2em'}} href="https://modest-goldstine-eec73b.netlify.app/" className='feat-site'>View Live Site</a>
                    <button onClick={handleGithubClick} className="featured-butt">{" </>"}</button>
                    </div>
                    <div className='images-container'>
                        <img src={cap8} alt="" />
                        <img src={cap7} alt="" />
                        <img src={cap9} alt="" />
                    </div>
                </div>
                <div className="site-container">
                <p className="site-top"> Website</p>
                   <p className="site-title">Modern Website 2</p>
                   <p className='site-description'>A full responsive modern website the abiltty to change uers and do what you please. Full functionis aly islsd with all the hnitgs wyhf one would suspes</p>
                   <div className='feat-bottom' style={{marginTop: '1em'}}>
                    <a style={{marginRight: '2em'}} href="https://61b53f512d6bcca0be095b91--blissful-feynman-64d01c.netlify.app/" className='feat-site'>View Live Site</a>
                    <button onClick={handleGithubClick2} className="featured-butt">{" </>"}</button>
                    </div>
               <div className='images-container'>
                  
                   <img src={cap21} alt="" />
                   <img src={cap11} alt="" />
                   
                  
                   <img src={cap12} alt="" />
                   <img src={cap13} alt="" />
                  
               </div>
           </div>
            </div>
        </div>
    )
}

export default Websites
