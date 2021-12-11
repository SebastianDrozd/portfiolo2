import React, { useEffect } from 'react'
import './Websites.css'
import cap8 from '../../assets/cap8.PNG'
import cap7 from '../../assets/cap7.PNG'
import cap9 from '../../assets/cap9.PNG'
import cap10 from '../../assets/cap10.PNG'
import cap11 from '../../assets/cap11.PNG'
import cap12 from '../../assets/cap12.PNG'
import cap13 from '../../assets/cap13.PNG'
const Websites = () => {

    return (
        <div className='sites-outer-container'>
            <br />
            <br />
            <p className='sites-title'>Websites</p>
            <div className="sites-container">
                <div className="site-container">
                <p className="site-top"> Website</p>
                        <p className="site-title">Modern Website</p>
                       
                        <p className='site-description'>A full responsive modern website the abiltty to change uers and do what you please. Full functionis aly islsd with all the hnitgs wyhf one would suspes</p>
                  
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
               <div className='images-container'>
                  
                   <img src={cap10} alt="" />
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
