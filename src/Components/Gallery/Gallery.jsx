/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Gallery.css";
import biryani from "../../assets/Edits/biryani.jpg";
import breakit from "../../assets/Edits/break-it.jpg";
import bucket from "../../assets/Edits/christmas-bucket.jpg";
import friedchicken from "../../assets/Edits/fried-chicken.jpg";
import brownie from "../../assets/Edits/sizzling-brownie.jpg";
import valentine from "../../assets/Edits/valentines.png";
import goat from "../../assets/Edits/goat-biryani.jpg";
import grn_apple_mojito from "../../assets/Edits/grn-apple-mojito.jpg";
import arokya1 from "../../assets/Edits/arokya1.jpg";
import arokya2 from "../../assets/Edits/arokya2.jpg";
import arokya3 from "../../assets/Edits/arokya3.jpg";
import arokya4 from "../../assets/Edits/arokya4.jpg";
import farewell from "../../assets/Edits/farewell.jpg";
import temp1 from "../../assets/Edits/template-1.jpg";
import temp2 from "../../assets/Edits/template-2.jpg";



const Gallery = () => {

  const [isOpen, setIsOpen] = useState(null);

  const handleOpen = (src) => {
    setIsOpen(src);
    console.log(true)
  }

  return (
    <div className="gallery">
      <div className="head">
        <h3 className="red">Gallery.</h3>
        <h3 className="black">Experience Our Master!</h3>
      </div>
      <div className="photos">
        <img src={biryani} alt="" className="edit-images" onClick={(e)=>handleOpen(e.target.src)}/>
        <img src={breakit} alt="" className="edit-images" onClick={(e)=>handleOpen(e.target.src)}/>
        <img src={brownie} alt="" className="edit-images" onClick={(e)=>handleOpen(e.target.src)}/>
        <img src={valentine} alt="" className="edit-images" onClick={(e)=>handleOpen(e.target.src)}/>
      </div>
      <div className="photos">
        <img src={bucket} alt="" className="edit-images" onClick={(e)=>handleOpen(e.target.src)}/>
        <img src={friedchicken} alt="" className="edit-images" onClick={(e)=>handleOpen(e.target.src)}/>
        <img src={goat} alt="" className="edit-images" onClick={(e)=>handleOpen(e.target.src)}/>
        <img src={grn_apple_mojito} alt="" className="edit-images" onClick={(e)=>handleOpen(e.target.src)}/>
      </div>
      <div className="photos">
        <img src={arokya1} alt="" className="edit-images" onClick={(e)=>handleOpen(e.target.src)}/>
        <img src={arokya2} alt="" className="edit-images" onClick={(e)=>handleOpen(e.target.src)}/>
        <img src={arokya3} alt="" className="edit-images" onClick={(e)=>handleOpen(e.target.src)}/>
        <img src={farewell} alt="" className="edit-images" onClick={(e)=>handleOpen(e.target.src)}/>
      </div>
      <div className="photos">
        <img src={temp1} alt="" className="edit-temp" onClick={(e)=>handleOpen(e.target.src)}/>
        <img src={temp2} alt="" className="edit-temp" onClick={(e)=>handleOpen(e.target.src)}/>
      </div>
      {isOpen && (
        <div className="popup" onClick={() => setIsOpen(null)}>
          <img src={isOpen} alt="" className="popup-image"/>
        </div>
      )}
    </div>
  );
};

export default Gallery;
