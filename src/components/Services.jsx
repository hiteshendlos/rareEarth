import React from "react";
import serviceImg from "../assets/images/coffe.png";
import serviceBackground from "../assets/images/service-background.png";

const Services = () => {
  return (
    <div
      className={`flex px-5  w-[100vw] h-[50vh]`}
      style={{ backgroundImage: `url(${serviceBackground})` }}
    >
      <img
        src={serviceImg}
        alt="Service Image"
        className="h-[100%] ml-[-50px] mx-5"
      />
      <div className="">
        <h3 className="font-bold service-heading">SERVICES</h3>

        <p className="service-paragraph">
          Rare Earth Genomics is a partnership formed with Texas A&amp;M
          Agrilife to accelerate hemp research and create tools for the farmer.
          Ongoing research trials are establishing hemp science best practices.
        </p>
        <p className="service-paragraph">
          The REG mission is to increase likelihood of a successful harvest
          through genetic analysis and rigorous environmental testing of
          vigorous cultivars. Reliable datasets, analytic tools and stable
          germplasm are core to the program. Success of the farmer is the goal!
        </p>
        <p className="service-paragraph">
          We believe that prosperity begins with a seed and the mission is to
          bring the stable genetics, cultivation technology and seeds to the
          world.
        </p>
      </div>
    </div>
  );
};

export default Services;
