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
          <p>: <a href="mailto: digitrnds@gmail.com">digitrnds@gmail.com</a></p>
        </div>
        <div className="sub">
          <img src={insta} alt="" className="icons"/>
          <p>:<a href="https://www.instagram.com/digitrnds" target="_blank" rel="noopener noreferrer"> @digitrnds</a></p>
        </div>
        <div className="sub">
          <img src={www} alt="" className="icons"/>
          <p>: <a href="https://digitrnds.vercel.app">https://digitrnds.vercel.app</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
