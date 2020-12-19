import React from 'react';
import "./Certificates.scss";
import {motion} from "framer-motion";
const Certifiactes = () => {
    
       

  return (
      <motion.div initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}>
        <div className="certificate-container certificate">
            <h1 className="h1 cer">Certificate</h1>
            <li><a href="https://www.udemy.com/certificate/UC-071dda2a-d129-45fa-a6e5-718dcfb3808d/"><i className="fas fa-download"></i> ReactJs</a></li>
            <li><a href="https://www.udemy.com/certificate/UC-4b5114ab-a474-4988-8dc4-0b20c8499050/"><i className="fas fa-download"></i> NodeJs</a></li>
            <li><a href="#2"><i className="fas fa-download"></i> Mern Stack</a></li>
        </div>
        </motion.div>
    )
}

export default Certifiactes
