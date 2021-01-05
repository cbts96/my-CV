import React from "react";
import About from "../About/About";
import Certifiactes from "../Certificates/Certifiactes";
import Contact from "../Hobbies/Hobbies";
import Education from "../Education/Education";
import End from "../End/End";

import Portfolio from "../Portfolio/Portfolio";
import ScrollTop from "../ScrollTotTop/ScrollTop";
import Skill from "../Skill/Skill";

import "./MainPage.scss";
const MainPage = () => {

  return (
    <div className="main-page">
      <ScrollTop />
      <About  />
      <Education />
      <Skill />
      <Portfolio />
      <Contact />
      <Certifiactes />
      <End/>
    </div>
  );
};

export default MainPage;
