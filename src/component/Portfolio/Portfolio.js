import React from "react";
import "./Portfolio.scss";
const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio h1">PORTFOLIO</div>
      <div className="portfolio-list">
        <div className="portfolio">
          <div className="p name">Crown-Clothing</div>
          <div className="git">
            <a href="https://github.com/cbts96/Crown-Clothing">Github</a> -
            <a href="https://crown-clothing-v3.herokuapp.com/">Live Demo</a>
          </div>
          <div className="tech-use">
          <i className="fas fa-cog"></i>
            <span>Technologies: React, Redux, Firebase, Sagas....</span>
          </div>
        </div>
        <div className="portfolio">
          <div className="p name">Crown-Clothing</div>
          <div className="git">
            <a href="https://github.com/cbts96/Crown-Clothing">Github</a> -
            <a href="https://crown-clothing-v3.herokuapp.com/">Live Demo</a>
          </div>
          <div className="tech-use">
          <i className="fas fa-cog"></i>
            <span>Technologies: React, Redux, Firebase, Sagas....</span>
          </div>
        </div>
       
        <div className="portfolio">
          <div className="p name">Comfy-House</div>
          <div className="git">
            <a href="https://github.com/cbts96/Comfy-house-cart-js">Github</a> -
            <a href="https://comfy-house-shopping-cart-js-lethang.netlify.com/">Live Demo</a>
          </div>
          <div className="tech-use">
          <i className="fas fa-cog"></i>
            <span>Technologies: Html, Css, Javascript....</span>
          </div>
        </div>
        <div className="portfolio">
          ........................NODE js
        </div>
        <div className="portfolio">
          <div className="p name">Comfy-House</div>
          <div className="git">
            <a href="https://github.com/cbts96/Comfy-house-cart-js">Github</a> -
            <a href="https://comfy-house-shopping-cart-js-lethang.netlify.com/">Live Demo</a>
          </div>
          <div className="tech-use">
          <i className="fas fa-cog"></i>
            <span>Technologies: Html, Css, Javascript....</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
