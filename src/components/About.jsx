import React from "react";
import aboutImg from "../assets/images/about-image.png";

const About = () => {
  return (
    <div className="flex px-[130px] h-[100vh] w-[100vw] items-center px-16">
      <img src={aboutImg} className="h-72 mx-10" />
      <div className="">
        <h3 className="font-bold about-Heading">ABOUT US</h3>

        <p className="about-p">
          Rare Earth Genomics is a partnership formed with Texas A&amp;M
          Agrilife to accelerate hemp research and create tools for the farmer.
          Ongoing research trials are establishing hemp science best practices.
        </p>
        <p className="about-p">
          The REG mission is to increase likelihood of a successful harvest
          through genetic analysis and rigorous environmental testing of
          vigorous cultivars. Reliable datasets, analytic tools and stable
          germplasm are core to the program. Success of the farmer is the goal!
        </p>
        <p className="about-p">
          We believe that prosperity begins with a seed and the mission is to
          bring the stable genetics, cultivation technology and seeds to the
          world.
        </p>
      </div>
    </div>
  );
};

export default About;
