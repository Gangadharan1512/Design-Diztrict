/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import logof from '../../assets/logo-full.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left">
          <img src={logof} alt="" className='logof'/>
        </div>
        <div className="right">
          <div className="line">
          <h1 className='black'>Your</h1><h1 className="red">Brand</h1><h1 className="black">,</h1>
        </div>
        <div className="line">
          <h1 className='black'>Our </h1><h1 className="red">Digital Trend</h1><h1 className="black">!</h1>
        </div>
        </div>
        <div className="rightsh">
          <div className="linesh">
          <h1 className='black'>Designs</h1>
        </div>
        <div className="linesh"><h1 className="red">Speak</h1><h1 className="black">,</h1></div>
        <div className="linesh">
          <h1 className='black'>Creativity</h1>
        </div>
        <div className="linesh"><h1 className="red">Inspires</h1><h1 className="black">!</h1></div>
        </div>
    </div>
  )
}

export default Hero