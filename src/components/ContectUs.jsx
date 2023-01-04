import React from "react";
import contectUs from "../assets/images/contectUs.png";
import fb from "../assets/images/fb.png";
import Instagram from "../assets/images/insta.png";
import LinkedIn from "../assets/images/linkedin.png";

import serviceBackground from "../assets/images/service-background.png";

const ContectUs = () => {
  return (
    <div
      className={`flex px-5 w-[100vw] h-[50vh] `}
      style={{ backgroundImage: `url(${serviceBackground})` }}
    >
      <img
        src={contectUs}
        alt="Service Image "
        className="h-[100%] ml-[-50px] mx-5"
      />
      <div className="">
        <h3 className="font-bold service-heading">CONTACT</h3>

        <p className="service-paragraph">
          For a full list of services to help solve your problem or advance your
          breeding program please contact
        </p>

        <a href="tel:+1 (832) 782-0426" className="service-paragraph">
          +1 (832) 782-0426
        </a>

        <p>
          <a
            href="mailto:aseem@rareearthgenomics.com"
            className="service-paragraph"
          >
            aseem@rareearthgenomics.com
          </a>
        </p>

        <div className="flex h-5 my-2">
          <img src={fb} alt="Facebook logo" />
          <img src={Instagram} className="mx-3" alt="Instagram logo" />
          <img src={LinkedIn} alt="Linked IN logo" />
        </div>
        <p className="service-heading">SUBSCRIBE TO OUR NEWSLETTER</p>

        <input
          type="text"
          placeholder="YOUR EMAIL"
          className="bg-transparent border rounded-3xl px-3 text-white outline-none w-[400px] py-2"
        />

        <button className=" bg-transparent border rounded-3xl ml-8 px-5 py-2 text-white hover:bg-white hover:text-black ">
          Enter
        </button>
      </div>
    </div>
  );
};

export default ContectUs;
