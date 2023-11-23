import React from 'react';
import './Navbar.css';
import logo from '../assets/vedantu-logo.svg.svg';
import arrowColor from '../assets/arrow-down-color.svg';
import arrowBlack from '../assets/arrow-down-black.svg';
import callIcon from '../assets/call_icon.svg';
export const Navbar = () => {
    
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="Logo"/>
        </div>
        <ul className='nav-menu'>
            <li className='active'>Courses<img src={arrowColor} alt="arrowDown"/></li>
            <li>Courses for Kids<img src={arrowBlack} alt="arrowDown"/></li>
            <li>Free study material<img src={arrowBlack} alt="arrowDown"/></li>
            <li>Offline Centres<img src={arrowBlack} alt="arrowDown"/></li>
            <li>More<img src={arrowBlack} alt="arrowDown"/></li>
        </ul>
        <div className="contact-menu">
            <img src={callIcon} alt="Calling Icon" />
            <div>
                <p className='smallFont'>Talk to our experts</p>
                <p>1800-120-456-456</p>
            </div>
        </div>
        <button className='btn'>Sign in</button>
        
    </div>
  )
}
