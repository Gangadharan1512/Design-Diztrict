/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="head">
        <h3 className="red">Services.</h3>
        <h3 className="black">Transforming Ideas Into Stunning Visuals!</h3>
      </div>
      <div className="bottom">
        <div className="ser">
          <h4 className="red">Social Media Graphics</h4>
          <p className="black">
            High-quality creatives Posters for Instagram, Facebook and other
            platforms.
          </p>
        </div>
        <div className="ser">
          <h4 className="red">Influencer Marketing</h4>
          <p className="black">
            Connect with the right influencers to boost your brand's reach.
          </p>
        </div>
        <div className="ser">
          <h4 className="red">Video Editing</h4>
          <p className="black">
            Engaging and high-quality edits for social media, ads, and more.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="ser">
          <h4 className="red">Branding & Logo Design</h4>
          <p className="black">
            Unique, memorable logos and branding elements that set you apart.
          </p>
        </div>
        <div className="ser">
          <h4 className="red">Marketing Materials</h4>
          <p className="black">
            Eye-catching posters, brochures, flyers, banners, and business
            cards.
          </p>
        </div>
        <div className="ser">
          <h4 className="red">Packaging & Print</h4>
          <p className="black">Product Packaging, Menus, Banners, Billboards</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
