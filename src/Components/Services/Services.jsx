/* eslint-disable no-unused-vars */
import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services'>
        <h1>OUR SERVICES</h1>
        <div className="ser-left">
            <div className="sub-ser">
            <h2>Brand Identity</h2>
            <h4>Logos, Business Cards, Brand Guidelines</h4>
        </div>
        <div className="sub-ser">
            <h2>Marketing & Advertising</h2>
            <h4>Posters, Flyers, Brochures, Social Media Graphics</h4>
        </div>
        <div className="sub-ser">
            <h2>Packaging & Print</h2>
            <h4>Product Packaging, Menus, Banners, Billboards</h4>
        </div>
        <div className="sub-ser">
            <h2>UI/UX & Digital Design</h2>
            <h4>Website & App UI, Digital Ads, Presentation Decks</h4>
        </div>
        </div>
        <div className="ser-right">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        
    </div>
  )
}

export default Services