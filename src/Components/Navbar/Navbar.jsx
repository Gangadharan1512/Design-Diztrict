/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className='containers'>
        <ul>
            <li><img src={logo} alt="" className='logo'/></li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>GALLERY</li>
            <li>COLLABORATIONS</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar