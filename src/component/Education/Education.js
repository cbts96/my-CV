import React from "react";
import "./Education.scss";
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
    <div className="education-container">
      <div className="education h1">EDUCATION</div>
      <div className="content">
        <div className="name">
          <span>Tiền Giang University </span><span className="time">2015-2019</span>
        </div>
        <div className="choose">- IT Programing - 4 year course</div>
      </div>
      
      <div className="content">
        <div className="name">
          <span>Udemy </span> <span className="time">2019-Forever</span>
          
        </div>
        <div className="choose">- Seft-taught Learning</div>
      </div>
    </div>
    </motion.div>
  );
};

export default Education;
