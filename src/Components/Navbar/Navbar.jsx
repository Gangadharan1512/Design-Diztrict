/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className='containers'>
        <ul>
            <li><Link to="hero" smooth={true} offset={-70} duration={700}><img src={logo} alt="" className='logo'/></Link></li>
            <li><Link to="about" smooth={true} offset={-70} duration={700}>ABOUT</Link></li>
            <li><Link to="services" smooth={true} offset={-70} duration={700}>SERVICES</Link></li>
            <li><Link to="gallery" smooth={true} offset={-70} duration={700}>GALLERY</Link></li>
            <li><Link to="colab" smooth={true} offset={-70} duration={700}>COLLABORATIONS</Link></li>
            <li><Link to="contact" smooth={true} offset={-70} duration={700}>CONTACT</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar