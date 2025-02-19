/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import './Gallery.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import biryani from '../../assets/Edits/biryani.jpg'
import breakit from '../../assets/Edits/break-it.jpg'
import bucket from '../../assets/Edits/christmas-bucket.jpg'
import friedchicken from '../../assets/Edits/fried-chicken.jpg'
import brownie from '../../assets/Edits/sizzling-brownie.jpg'
import valentine from '../../assets/Edits/valentines.png'
import goat from '../../assets/Edits/goat-biryani.jpg'
import grn_apple_mojito from '../../assets/Edits/grn-apple-mojito.jpg'
import arokya1 from '../../assets/Edits/arokya1.jpg'
import arokya2 from '../../assets/Edits/arokya2.jpg'
import arokya3 from '../../assets/Edits/arokya3.jpg'
import arokya4 from '../../assets/Edits/arokya4.jpg'




const Gallery = () => {

    const slider1 = useRef();
    const slider2 = useRef();
    let tx = 0;

    const slideForward = () =>{
        if(tx > -75)
            tx -= 25;
        slider1.current.style.transform = `translateX(${tx}%)`
    }


    const slideBackward = () =>{
        if(tx < 0)
            tx += 25;
        slider1.current.style.transform = `translateX(${tx}%)`
    }

    const slideForward2 = () =>{
        if(tx > -50)
            tx -= 25;
        slider2.current.style.transform = `translateX(${tx}%)`
    }


    const slideBackward2 = () =>{
        if(tx < 0)
            tx += 25;
        slider2.current.style.transform = `translateX(${tx}%)`
    }



  return (
    <div className='gallery'>
        <div className="head">
        <h3 className="red">Gallery.</h3>
        <h3 className="black">Experience Our Master!</h3>
      </div>
        <div className="photos">
            <div className="sub-photos">
                <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
                <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
                <div className="slider">
                    <ul ref={slider1}>
                        <li><div className="slide">
                            <img src={biryani} alt="" className='edit-images'/></div></li>
                            <li><div className="slide">
                            <img src={breakit} alt="" className='edit-images'/></div></li>
                            <li><div className="slide">
                            <img src={bucket} alt="" className='edit-images'/></div></li>
                            <li><div className="slide">
                            <img src={friedchicken} alt="" className='edit-images'/></div></li>
                            <li><div className="slide">
                            <img src={brownie} alt="" className='edit-images'/></div></li>
                            <li><div className="slide">
                            <img src={valentine} alt="" className='edit-images'/></div></li>
                            <li><div className="slide">
                            <img src={goat} alt="" className='edit-images'/></div></li>
                            <li><div className="slide">
                            <img src={grn_apple_mojito} alt="" className='edit-images'/></div></li>
                            <li><div className="slide">
                            <img src={arokya1} alt="" className='edit-images'/></div></li>
                            <li><div className="slide">
                            <img src={arokya2} alt="" className='edit-images'/></div></li>
                            <li><div className="slide">
                            <img src={arokya3} alt="" className='edit-images'/></div></li>
                            <li><div className="slide">
                            <img src={arokya4} alt="" className='edit-images'/></div></li>
                    </ul>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Gallery