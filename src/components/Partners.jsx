import React from "react";
import TeaxsImage from "../assets/images/Teaxs.png";

import "../App.scss";

const Partners = () => {
  return (
    <>
      {/* <h1 className="text-center">PARTNERS</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        facilis?
      </p>

      <div className="flex">
        <div className="partners-boxes"></div>
        <div className="partners-boxes"></div>
      </div> */}

      <div className="partner-all-section-content-alignment w-[100vw]">
        <div className="container-xl">
          <h4 className="text-center text-2xl text-white">PARTNERS</h4>
          <p className="text-center text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="all-partners-content-icon-alignment">
            <div></div>
            <div></div>
            <div></div>
            <div className="order-class">
              <img src={TeaxsImage} alt="TeaxsImage" />
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
