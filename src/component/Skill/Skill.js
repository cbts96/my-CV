import React from "react";
import "./Skill.scss";
import {motion} from "framer-motion";
const Skill = () => {
  return (
    <motion.div initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}>
    <div id="skills">
    <div className="skill-container">
      <div className="skill h1">SKILLS</div>
      <h1 className="tech-title">Technology & Tools</h1>
      <div className="tech-skill">
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt"></i>

        <i className="fab fa-js-square"></i>
        <i className="fab fa-react"></i>
        <i className="fab fa-node-js"></i>
        <i className="fab fa-docker"></i>
        <i className="fab fa-git"></i>
      </div>
      AND MORE ...... 
    </div>
   
    </div>
    </motion.div>
  );
};

export default Skill;
