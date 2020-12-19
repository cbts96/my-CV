import React from "react";
import "./End.scss";
import {motion} from "framer-motion";
const End = () => {
  return (
    <motion.div initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}>
    <div className="end-container">
      <h1 className="h1 end">The End</h1>
      <p className="para">
        Finally, I would like to say "Thank You" for spent time to look at my CV
        profile. Have a nice day, LOVE YOU !!! (◕‿↼){" "}
      </p>
      <div className="text-center">
        &copy; 2020 LeThang. All rights reserved
      </div>
    </div>
    </motion.div>
  );
};

export default End;
