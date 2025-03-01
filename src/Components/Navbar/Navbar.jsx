/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import menuicon from '../../assets/menuicon.png'
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className='containers'>
      <img src={menuicon} alt=""  className='menuicon' onClick={toggleMenu} />
        <ul className={mobileMenu ? "mobile-menu-open" : ""}>
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