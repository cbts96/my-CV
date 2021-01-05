import React from "react";
import icon from "../../images/C360.jpg";
import "./IconImage.scss";

const iconImage = ({toggle}) => {
  return (
    <div>
      
          <div className="shape-outer circle">
            <img src={icon} alt="icon" className={`shape-inner circle ${toggle?"open":"close"} `} />
          </div>
        </div>
    
  );
};

export default iconImage;
