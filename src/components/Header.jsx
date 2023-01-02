import React from "react";
// import Logo from "../../assets/images/logo.png";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="flex  justify-between mx-10 mt-5">
          <img src={Logo} className="h-14" />
          <div>
            <a>EN</a> <span>|</span> <a>PT</a> <span>|</span> <a>Fr</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
