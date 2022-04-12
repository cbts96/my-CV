import React, { useState } from "react";
import "./Portfolio.scss";
import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";
import a4 from "../../assets/a4.png";
import a5 from "../../assets/a5.png";
import a6 from "../../assets/a6.png";
import a7 from "../../assets/a7.png";
import a8 from "../../assets/a8.png";
import a9 from "../../assets/a9.png";
import a10 from "../../assets/a10.png";
import a11 from "../../assets/a11.png";
import last from "../../assets/last.png";
// import ReactFancyBox from "react-fancybox";
// import "react-fancybox/lib/fancybox.css";
import { motion } from "framer-motion";
import { Modal } from "react-materialize";
// import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
const Portfolio = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [setLightBoxDisplay] = useState(false);
  const images = [a1, a2, a3, a4, a5, a6, a7, a8, a9,a10,a11,last];

  //define
  const imageCards = images.map((image) => (
    <img
      key={image}
      alt="img"
      className="img-portfolio"
      onClick={() => showImage(image)}
      src={image}
    />
  ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  // const showPrev = (e) => {
  //   e.stopPropagation();
  //   let currentIndex = images.indexOf(imageToShow);
  //   if (currentIndex <= 0) {
  //     setLightBoxDisplay(false);
  //   } else {
  //     let nextImage = images[currentIndex - 1];
  //     setImageToShow(nextImage);
  //   }
  // };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="portfolio-container portfolios">
        <div className="portfolio-title h1">PORTFOLIO</div>
        <div style={{ marginLeft: "15px" }} className="role">
          PERSONAL PROJECT:{" "}
        </div>
        <div className="grid-port portfolio-list">
          <div className="portfolio">
            <div className="p name">Crown-Clothing - Reactjs</div>
            <div className="git">
              &#128073;
              <a
                href="https://github.com/cbts96/Crown-Clothing"
                className="git-blue"
              >
                Github
              </a>{" "}
              -
              <a
                href="https://crown-clothing-v3.herokuapp.com/"
                className="git-blue"
              >
                {" "}
                Live Demo
              </a>
            </div>
            <div className="tech-use">
              <i className="fas fa-cog"></i>
              <span>Technologies: React, Redux, Firebase, Sagas....</span>
            </div>
            <Modal
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={imageCards[0]}
            >
              {imageCards[0]}
            </Modal>
          </div>
          <div className="portfolio">
            <div className="p name">Natour - CSS</div>
            <div className="git">
              &#128073;
              <a
                href="https://github.com/cbts96/natour-html-css"
                className="git-blue"
              >
                Github
              </a>{" "}
              -
              <a
                href="https://natour-html-css-by-lethang.netlify.app/"
                className="git-blue"
              >
                {" "}
                Live Demo
              </a>
            </div>
            <div className="tech-use">
              <i className="fas fa-cog"></i>
              <span>Technologies: Html, Css, Javascript....</span>
            </div>

            <Modal
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={imageCards[1]}
            >
              {imageCards[1]}
            </Modal>
          </div>

          <div className="portfolio">
            <div className="p name">Comfy-Store - Javascript</div>
            <div className="git">
              &#128073;{" "}
              <a
                href="https://github.com/cbts96/Comfy-Store"
                className="git-blue"
              >
                Github
              </a>{" "}
              -
              <a
                href="https://comfy-store-lethang.netlify.app/"
                className="git-blue"
              >
                {" "}
                Live Demo
              </a>
            </div>
            <div className="tech-use">
              <i className="fas fa-cog"></i>
              <span>Technologies: Html, Css, Javascript....</span>
            </div>
            <Modal
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={imageCards[2]}
            >
              {imageCards[2]}
            </Modal>
          </div>
          <div className="portfolio">
            <div className="p name">GreenSock Animation - Javascript</div>
            <div className="git">
              &#128073;{" "}
              <a
                href="https://github.com/cbts96/GreenSock-Ex"
                className="git-blue"
              >
                Github
              </a>{" "}
              -
              <a
                href="https://greensock-ex-by-lethang.netlify.app/"
                className="git-blue"
              >
                {" "}
                Live Demo
              </a>
            </div>
            <div className="tech-use">
              <i className="fas fa-cog"></i>
              <span>Technologies: Html, Css, Javascript....</span>
            </div>
            <Modal
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={imageCards[6]}
            >
              {imageCards[6]}
            </Modal>
          </div>
          <div className="portfolio">
            <div className="p name">Natour - NodeJS</div>
            <div className="git">
              &#128073;
              <a
                href="https://github.com/cbts96/Natour-latsted"
                className="git-blue"
              >
                Github
              </a>{" "}
              -
              <a
                href="https://natour-lethang.herokuapp.com/"
                className="git-blue"
              >
                {" "}
                Live Demo
              </a>
            </div>
            <div className="tech-use">
              <i className="fas fa-cog"></i>
              <span>Technologies: Nodejs, MongoDB, Express,.....</span>
            </div>
            <Modal
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={imageCards[3]}
            >
              {imageCards[3]}
            </Modal>
          </div>
         
          <div className="portfolio">
            <div className="p name">FilmTicket-Reactjs</div>
            <div className="git">
              &#128073;
              <a
                href="https://github.com/cbts96/Film-ticket"
                className="git-blue"
              >
                Github
              </a>{" "}
              -
              Not Available
            </div>
            <div className="tech-use">
              <i className="fas fa-cog"></i>
              <span>Technologies: Reactjs,Redux, AntD,.....</span>
            </div>
            <Modal
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={imageCards[9]}
            >
              {imageCards[9]}
            </Modal>
          </div>
          <div className="portfolio">
            <div className="p name">Massive-Ecommerce-MERNSTACK</div>
            <div className="git">
              &#128073;
              <a
                href="https://github.com/cbts96/Massive-mern-master"
                className="git-blue"
              >
                Github
              </a>{" "}
              -
              <a
                href="https://massive-mern-lethang.herokuapp.com/"
                className="git-blue"
              >
                Live Demo
              </a>{" "}
            </div>
            <div className="tech-use">
              <i className="fas fa-cog"></i>
              <span>Technologies: Nodejs,Reactjs,Redux, AntD,.....</span>
            </div>
            <Modal
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={imageCards[10]}
            >
              {imageCards[10]}
            </Modal>
          </div>
         
    
        </div>
        <div style={{ marginLeft: "15px" }} className="role">
          COMPANY PROJECTS (Team work) :
        </div>
        <div className="grid-port portfolio-list">
          <div className="portfolio">
            <div className="p name" style={{ margin: "10px 0px" }}>
              POD (MEDICAL ROBOT)
            </div>
            <div className="size">
              &#128073; Github - Live Demo (Not Available){" "}
            </div>
            <div className="tech-use">
              <i className="fas fa-cog"></i>
              <span>
                Technologies: Reactjs, Scss, Ant design, Typescript ....
              </span>
            </div>
            <Modal
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={imageCards[7]}
            >
              {imageCards[7]}
            </Modal>
          </div>

          <div className="portfolio">
            <div className="p name" style={{ margin: "10px 0px" }}>
              MTC (Music + Video Data Record)
            </div>
            <div className="size">
              &#128073; Github - Live Demo (Not Available){" "}
            </div>

            <div className="tech-use">
              <i className="fas fa-cog"></i>
              <span>
                Technologies: Reactjs, Scss, Ant design, Typescript...
              </span>
            </div>
            <Modal
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={imageCards[8]}
            >
              {imageCards[8]}
            </Modal>
          </div>
          <div className="portfolio">
            <div className="p name" style={{ margin: "10px 0px" }}>
              Social network
            </div>
            <div className="size">
              &#128073; Github - Live Demo (Not Available){" "}
            </div>

            <div className="tech-use">
              <i className="fas fa-cog"></i>
              <span>
                Technologies: Reactjs, Nodejs, Scss, Ant design, Typescript...
              </span>
            </div>
            <Modal
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={imageCards[11]}
            >
              {imageCards[11]}
            </Modal>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
