import React, { useEffect } from 'react'
import './Featured.css'
import cap from '../../assets/cap.PNG'
const Featured = () => {
    useEffect(()=> {
        
    },[])
    return (
        <div className='featured-main-container'>
            
                <div className="featured-texts">
                    <p className='feat-project'>Featured Project</p>
                    <p className='feat-title'>Snippitz.io Full stack application</p>
                    <p className='feat-description'>This is a projcet that will project many other projects fro amother the projet to the project of the owrd projects yo</p>
                    <button className="featured-butt">View</button>
                </div>
                <div className="featured-image">
                    <img id="featured-image" src={cap} alt="" />
                </div>
            
        </div>
    )
}

export default Featured
