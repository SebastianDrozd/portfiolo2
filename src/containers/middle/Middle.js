import React from 'react'
import './Middle.css'
import pro from '../../assets/pro2.jpg'
import cap from '../../assets/cap.PNG'
import cap2 from '../../assets/cap2.PNG'
import cap3 from '../../assets/cap3.png'
import cap4 from '../../assets/cap4.PNG'
import pic from '../../assets/pic.png'
import financeapp from '../../assets/financeapp.png'
const Middle = () => {
    const handlePanClick = () => {
        window.location = "https://github.com/SebastianDrozd/gamezone"
    }
    const handleTicketClick = ()=> {
        window.location= "https://github.com/SebastianDrozd/alphademo"
    }
    const handleExClick = () => {
        window.location="https://github.com/SebastianDrozd/extremehomesAngular"
    }
    return (
        <div className='middle-outer-flex'>
           
            <br />
            <br />
            <div id='pro4' className='middle-pro-container'>
            <div id="projects" className="featured-texts2">
                    <p className='feat-project2'>Full Stack Project</p>
                    <p className='feat-title2'>Personal Finance App</p>
                    <p className='feat-description2'>A full stack application using the plaid api to access bank account information,transactions, and other financial info. </p>
                    <button onClick={handlePanClick} className="featured-butt2">View</button>
                </div>
                <div className="pro-image">
                    <img  src={financeapp} alt="" />
                </div>
            </div>
            <div id='pro1' className='middle-pro-container'>
            <div id="projects" className="featured-texts2">
                    <p className='feat-project2'>Raspberry Pi Project</p>
                    <p className='feat-title2'>Pan-Anon</p>
                    <p className='feat-description2'>Ever leave your home and worry if you left your stove on? Using react native, websockets, python and the raspberry pi this application puts all your worries to ease. Monitor your stove from anywhere!</p>
                    <button onClick={handlePanClick} className="featured-butt2">View</button>
                </div>
                <div className="pro-image">
                    <img  src={cap2} alt="" />
                </div>
            </div>
            <div id='pro2'  className='middle-pro-container'>
            <div className="featured-texts2">
                    <p className='feat-project2'>Full Stack Project</p>
                    <p className='feat-title2'>I.T  Ticket  System</p>
                    <p className='feat-description2'>A full stack web application made using React and spring Boot. Allows for the creation of accounts, creation of tickets and the functionality you expect from a crud app.</p>
                    <button onClick={handleTicketClick} className="featured-butt2">View</button>
                </div>
                <div className="pro-image">
                    <img  src={pic} alt="" />
                </div>
            </div>
            <div id='pro3' className='middle-pro-container'>
            <div className="featured-texts2">
                    <p className='feat-project2'>Full Stack Project</p>
                    <p className='feat-title2'>Estimate Generator</p>
                    <p className='feat-description2'>This project was made for a construction and it allows for the on the site creation of home construction estimates.The main feature is a canvas section which allows for the editing of photos.</p>
                    <button onClick={handleExClick} className="featured-butt2">View</button>
                </div>
                <div className="pro-image">
                    <img  src={cap4} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Middle
