import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./navbar.css"; // Import your CSS file for styling
import Logo from "../../assets/Logo.png";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className="logo">
                    <img className="logoimage" src={Logo} alt="" />
                </div>
                <div className="middle1">
                    <ul className='middle'>
                        <li><button className="nav-button">SERVICES</button></li>
                        <li><button className="nav-button">GALLERY</button></li>
                        <li><button className="nav-button">ABOUT</button></li>
                    </ul>
                </div>
                <div className="right1">
                    <ul className='rightbar'>
                        <li><button className="nav-button">LOG IN</button></li>
                        <li><button className="nav-button">GET STARTED</button></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;