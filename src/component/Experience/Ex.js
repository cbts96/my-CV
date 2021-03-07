import React from "react";
import "./Ex.scss";
import {motion} from "framer-motion"
const Education = () => {
  return (
    <motion.div initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}>
    <div className="ex-container">
      <div className="ex h1">WORK EXPERINCE</div>
      <div className="content">
        <div className="name">
          <span>VNPT IT (Internship)</span><span className="time">2019</span>
        </div>
        <div className="choose">- Front-end</div>
      </div>
      
      <div className="content">
        <div className="name">
          <span>EGANY-TECH </span> <span className="time">2021</span>
          
        </div>
        <div className="choose">- Front-end (Shoplify Platform)</div>
      </div>
    </div>
    </motion.div>
  );
};

export default Education;
