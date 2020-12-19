import React, { useState, Fragment, useEffect } from "react";
import "./ScrollTop.scss";
const ScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    setScrollTop(window.pageYOffset);
  };
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Fragment>
      
      <div
        className={`${scrollTop > 200 ? "block" : "none"} scroll-top`}
        onClick={handleClick}
      >
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </div>
    </Fragment>
  );
};
export default ScrollTop;
