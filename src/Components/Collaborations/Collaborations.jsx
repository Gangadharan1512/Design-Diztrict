/* eslint-disable no-unused-vars */
import React from 'react'
import './Collaborations.css'
import rasikase from '../../assets/rasikas-logo.png'
import rasikasgf from '../../assets/grandfusion-logo.png'
import dine from '../../assets/dine-logo.jpg'
import arokya from '../../assets/arokya-logo.jpg'

const Collaborations = () => {
  return (
    <div className='colab'>
        <h1>COLLABORATIONS</h1>
        <div className="col">
            <img src={rasikase} alt="" className='logo-img'/>
            <img src={rasikasgf}alt="" className='logo-img'/>
            <img src={dine} alt="" className='logo-img'/>
            <img src={arokya}alt="" className='logo-img'/>
        </div>
    </div>
  )
}

export default Collaborations