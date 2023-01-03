import React from "react";
import { useEffect } from "react";

import bodybackground from "../assets/images/body-background.png";

const Popup = ({ onTop }) => {
  useEffect(() => {
    // console.log(props);
    console.log(onTop);
  });

  return (
    <div
      className={`w-[33vw]  mx-auto flex justify-between px-10 text-[#ffcfa7] py-5 shadow-xl
    ${onTop == true ? "popup-intial" : "popup-out"}
      `}
      style={{
        backgroundImage: `url(${bodybackground})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <p>OPEN MAIL ?</p>
      <button className="border-2 border-[#ffcfa7] rounded-3xl px-8 py-1">
        Cancel
      </button>
      <button className="border-2 border-[#ffcfa7] rounded-3xl px-8 py-1">
        Open
      </button>
    </div>
  );
};

export default Popup;
