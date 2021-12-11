import React from 'react'
import './Middle.css'
import pro from '../../assets/pro2.jpg'
import cap from '../../assets/cap.PNG'
import cap2 from '../../assets/cap2.PNG'
import cap3 from '../../assets/cap3.png'
import cap4 from '../../assets/cap4.PNG'
const Middle = () => {
    return (
        <div className='middle-outer-flex'>
           
            <br />
            <br />
            <div id='pro1' className='middle-pro-container'>
            <div id="projects" className="featured-texts2">
                    <p className='feat-project2'>React Native Project</p>
                    <p className='feat-title2'>Raspberry Pi Stove monitoring Application</p>
                    <p className='feat-description2'>This is a projcet that will project many other projects fro amother the projet to the project of the owrd projects yo</p>
                    <button className="featured-butt2">View</button>
                </div>
                <div className="pro-image">
                    <img  src={cap2} alt="" />
                </div>
            </div>
            <div id='pro2'  className='middle-pro-container'>
            <div className="featured-texts2">
                    <p className='feat-project2'>Full Stack Project</p>
                    <p className='feat-title2'>I.T Department Ticket Management System</p>
                    <p className='feat-description2'>This is a projcet that will project many other projects fro amother the projet to the project of the owrd projects yo</p>
                    <button className="featured-butt2">View</button>
                </div>
                <div className="pro-image">
                    <img  src={cap3} alt="" />
                </div>
            </div>
            <div id='pro3' className='middle-pro-container'>
            <div className="featured-texts2">
                    <p className='feat-project2'>Full Stack Project</p>
                    <p className='feat-title2'>Construction Company Estimate Generator</p>
                    <p className='feat-description2'>This is a projcet that will project many other projects fro amother the projet to the project of the owrd projects yo</p>
                    <button className="featured-butt2">View</button>
                </div>
                <div className="pro-image">
                    <img  src={cap4} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Middle
