/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Collaborations.css";
import rasikase from "../../assets/rasikas-logo.png";
import rasikasgf from "../../assets/grandfusion-logo.png";
import dine from "../../assets/dine-logo.jpg";
import arokya from "../../assets/arokya-logo.jpg";
import jmed from "../../assets/jmed.jpg";

const Collaborations = () => {
  return (
    <div className="colab">
      <div className="head">
        <h3 className="red">Collaborations.</h3>
        <h3 className="black">Create & Elevate!!</h3>
      </div>
      <div className="col">
        <img src={rasikase} alt="" className="ele" />
        <img src={rasikasgf} alt="" className="gf" />
        <img src={dine} alt="" className="dine" />
        <img src={arokya} alt="" className="arokya" />
        <img src={jmed} alt="" className="jmed" />
      </div>
    </div>
  );
};

export default Collaborations;
