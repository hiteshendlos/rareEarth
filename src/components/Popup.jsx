import React from "react";

import bodybackground from "../assets/images/body-background.png";

const Popup = () => {
  return (
    <div
      className="w-[33vw]  mx-auto flex justify-between px-10 text-[#ffcfa7] py-5 "
      style={{
        backgroundImage: `url(${bodybackground})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <p>OPEN MAIL ?</p>
      <button className="border-2 border-[#ffcfa7] px-3 rounded-xl">
        Cancel
      </button>
      <button>Open</button>
    </div>
  );
};

export default Popup;
