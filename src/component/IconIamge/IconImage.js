import React from "react";
import icon from "../../images/C360.jpg";
import "./IconImage.scss";

const iconImage = () => {
  return (
    <div>
      
          <div className="image-icon">
            <img src={icon} alt="icon" className="icon-img" />
          </div>
        </div>
    
  );
};

export default iconImage;
