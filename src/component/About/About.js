import React from "react";
import "./About.scss";
import Button from "../Button/Button";
import {motion} from "framer-motion";
const About = () => {
  return (
      <motion.div initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}>
    <div className="about-container" >
        
      <span className="about">
        <div className="container-about name">
          LÊ <div className="name">XUÂN THẮNG</div>
        </div>
      </span>
      <span className="about">
        <div className="container-about">
          <i className="fas fa-address-book"></i> Bình Ninh Commune, Chợ Gạo District, Tiền
          Giang Province, Việt Nam
        </div>
      </span>
      <span className="about">
        <div className="container-about">
          <i className="fas fa-phone-square"></i>0377-319-789
        </div>
      </span>
      <span className="about2">
        <div className="container-about">
          <i className="fas fa-mail-bulk"></i>
          <a href="lexuanthang123@gmail.com" className="ml-5">
            lexuanthang123@gmail.com
          </a>
        </div>
      </span>
      <span className="about2">
        <div className="container-about">
          <i className="fab fa-github"></i>
          <a href="https://github.com/cbts96" className="ml-5">
            https://github.com/cbts96
          </a>
        </div>
      </span>
      <span className="about2">
        <div className="container-about">
          <i className="fab fa-linkedin"></i>
          <a
            href="https://www.linkedin.com/in/le-thang-734a5912b/"
            className="ml-5"
          >
            https://www.linkedin.com/in/le-thang-734a5912b/
          </a>
        </div>
      </span>
      <span className="quote">PRACTICE MAKES PERFECT !</span>
      <span className="quote-name">- Somebody famous</span>
      <Button/>
    </div>
    </motion.div>
    
    
  );
};

export default About;







 
