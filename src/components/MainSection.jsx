import React from "react";
import Logo from "../assets/images/logo.gif";

const MainSection = () => {
  return (
    <div className="flex justify-center items-center  pt-32 main-div h-[100vh] ">
      <p>HEAL THE SOIL</p>
      <img src={Logo} className="h-80 mx-10" />
      <p>HEAL THE SOUL</p>
    </div>
  );
};

export default MainSection;
