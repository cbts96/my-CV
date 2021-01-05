import React from 'react'
import "./Hobbies.scss";
import {motion} from "framer-motion";
const Hobbies = () => {
    return (
        <motion.div initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}>
        <div>
            <div className="contact-container">
                <h1 className="h1 hobbies">Hobbies</h1>
                <span>I enjoy a lot of my free time to:
                    <ul>
                        <li>Watch Movies</li>
                        <li>Listen to music</li>
                        <li>Play computer game</li>
                        
                    </ul>
                </span>
            </div>
        </div>
        </motion.div>
    )
}

export default Hobbies;
