import React from "react";
import Logo from "../assets/images/logo.gif";
import { motion } from "framer-motion";

const MainSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 5.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex justify-center items-center  pt-32 main-div h-[100vh] ">
        <p>HEAL THE SOIL</p>
        <img src={Logo} className="h-80 mx-10" />
        <p>HEAL THE SOUL</p>
      </div>
    </motion.div>
  );
};

export default MainSection;
