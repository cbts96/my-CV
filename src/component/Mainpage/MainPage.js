import React from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import Portfolio from '../Portfolio/Portfolio';
import ScrollTop from '../ScrollTotTop/ScrollTop';
import Skill from '../Skill/Skill';

import "./MainPage.scss";
const MainPage = () => {
    return (
        <div className="main-page">
            <ScrollTop/>
            <About/>
            <Education/>
            <Skill/>
            <Portfolio/>
            
        </div>
    )
}

export default MainPage
