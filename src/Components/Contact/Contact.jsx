/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Contact.css";
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import www from '../../assets/www.png'
import insta from '../../assets/insta.png'

const Contact = () => {
  return (
    <div className="contact">
      <div className="head">
        <h3 className="red">Contact.</h3>
        <h3 className="black">Let's Create Together!</h3>
      </div>
      <div className="con">
        <div className="sub">
          <img src={phone} alt="" className="icons"/>
          <p>: <a href="tel: +91 8754802445">+91 8754802445</a></p>
        </div>
        <div className="sub">
          <img src={mail} alt="" className="icons"/>
          <p>: <a href="mailto: thedesigndiztrict@gmail.com">thedesigndiztrict@gmail.com</a></p>
        </div>
        <div className="sub">
          <img src={insta} alt="" className="icons"/>
          <p>:<a href="https://www.instagram.com/thedesigndiztrict" target="_blank" rel="noopener noreferrer"> @thedesigndiztrict</a></p>
        </div>
        <div className="sub">
          <img src={www} alt="" className="icons"/>
          <p>: <a href="https://design-diztrict.vercel.app">https://design-diztrict.vercel.app</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
