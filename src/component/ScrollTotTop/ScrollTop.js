import React from "react";
import "./ScrollTop.scss";
const ScrollTop = () => {
  return (
    <div
      className={`${window.pageYOffset > 200 ? "block":"none"} scroll-top`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="fas fa-chevron-up"></i>
    </div>
  );
};

export default ScrollTop;
