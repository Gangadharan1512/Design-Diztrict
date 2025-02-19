/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import logof from '../../assets/logo-full.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left-hero">
          <div className="empty">
             <img src={logof} alt="" className='logof'/>
          </div>
        </div>
        <div className="right-hero">
            <h1>Where Creativity Meets Precision</h1>
            <h3>Your Vision, We Design, You Impress</h3>
            <p></p>
        </div>
    </div>
  )
}

export default Hero