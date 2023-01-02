import React from "react";
import Logo from "../assets/images/logo.gif";

const MainSection = () => {
  return (
    <div className="flex justify-center items-center">
      <p>HEAL THE SOIL</p>
      <img src={Logo} className="h-20 mx-10" />
      <p>HEAL THE SOUL</p>
    </div>
  );
};

export default MainSection;
