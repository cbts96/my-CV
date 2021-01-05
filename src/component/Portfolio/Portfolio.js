import React from "react";
import "./Portfolio.scss";
import a1 from "../../images/a1.png";
import a2 from "../../images/a2.png";
import a3 from "../../images/a3.png";
import a4 from "../../images/a4.png";
import a5 from "../../images/a5.png";
import a6 from "../../images/a6.png";
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import {motion} from "framer-motion";
const Portfolio = () => {
  return (
    <motion.div initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}>
    <div className="portfolio-container portfolios">
      <div className="portfolio-title h1">PORTFOLIO</div>
      <div className=" grid-port portfolio-list">
        <div className="portfolio">
          <div className="p name">Crown-Clothing - Reactjs</div>
          <div className="git">
          &#128073;<a href="https://github.com/cbts96/Crown-Clothing" className="blue">
              Github
            </a>{" "}
            -
            <a href="https://crown-clothing-v3.herokuapp.com/" className="blue">
              {" "}
              Live Demo
            </a>
          </div>
          <div className="tech-use">
            <i className="fas fa-cog"></i>
            <span>Technologies: React, Redux, Firebase, Sagas....</span>
          </div>
          <ReactFancyBox
         
          thumbnail={a1}
          image={a1}/>
        </div>
        <div className="portfolio">
          <div className="p name">Natour - CSS</div>
          <div className="git">
          &#128073;<a
              href="https://github.com/cbts96/natour-html-css"
              className="blue"
            >
              Github
            </a>{" "}
            -
            <a
              href="https://natour-html-css-by-lethang.netlify.app/"
              className="blue"
            >
              {" "}
              Live Demo
            </a>
          </div>
          <div className="tech-use">
            <i className="fas fa-cog"></i>
            <span>Technologies: Html, Css, Javascript....</span>
          </div>
          <ReactFancyBox
         
          thumbnail={a2}
          image={a2}/>
        </div>

        <div className="portfolio">
          <div className="p name">Comfy-House - Javascript</div>
          <div className="git">
          &#128073; <a
              href="https://github.com/cbts96/Comfy-house-cart-js"
              className="blue"
            >
              Github
            </a>{" "}
            -
            <a
              href="https://comfy-house-shopping-cart-js-lethang.netlify.com/"
              className="blue"
            >
              {" "}
              Live Demo
            </a>
          </div>
          <div className="tech-use">
            <i className="fas fa-cog"></i>
            <span>Technologies: Html, Css, Javascript....</span>
          </div>
          <ReactFancyBox
         
         thumbnail={a3}
         image={a3}/>
        </div>
        <div className="portfolio">
          <div className="p name">Natour - NodeJS</div>
          <div className="git">
          &#128073;<a
              href="https://github.com/cbts96/Natour-latsted"
              className="blue"
            >
              Github
            </a>{" "}
            -
            <a href="https://natour-lethang.herokuapp.com/" className="blue">
              {" "}
              Live Demo
            </a>
          </div>
          <div className="tech-use">
            <i className="fas fa-cog"></i>
            <span>Technologies: Nodejs, MongoDB, Express,.....</span>
          </div>
          <ReactFancyBox
         
          thumbnail={a4}
          image={a4}/>
        </div>
        <div className="portfolio">
          <div className="p name">Basic-Chat-App - Nodejs</div>
          <div className="git">
          &#128073;<a
              href="https://github.com/cbts96/Basic-chat-app-v1"
              className="blue"
            >
              Github
            </a>{" "}
            -
            <a
              href="https://basic-chat-app-by-lethang.netlify.app/"
              className="blue"
            >
              {" "}
              Live Demo
            </a>
          </div>
          <div className="tech-use">
            <i className="fas fa-cog"></i>
            <span>Technologies: Nodejs, ReactJS, Socket IO....</span>
          </div>
          <ReactFancyBox
         
          thumbnail={a5}
          image={a5}/>
        </div>
        <div className="portfolio">
          <div className="p name">Todo-List - Reactjs</div>
          <div className="git">
          &#128073;<a href="https://github.com/cbts96/TodolistReact" className="blue">
              Github
            </a>{" "}
            -
            <a
              href="https://todolist-react-lethang.netlify.app/"
              className="blue"
            >
              {" "}
              Live Demo
            </a>
          </div>
          <div className="tech-use">
            <i className="fas fa-cog"></i>
            <span>Technologies: Html, Css, Javascript....</span>
          </div>
          <ReactFancyBox
         
          thumbnail={a6}
          image={a6}/>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Portfolio;
