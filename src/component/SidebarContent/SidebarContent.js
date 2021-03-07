import React from 'react';
import "./SidebarContent.scss";
import {Link} from "react-scroll";

const SidebarContent = () => {
    return (
        <div className="sidebar-content">
            <Link className="item" to="about" duration={1000} smooth={true}>About</Link>
            <Link className="item" to="education" duration={1000} smooth={true} >Education</Link>
            <Link className="item" to="ex" duration={1000} smooth={true} >Experince</Link>
            <Link className="item" to="skills" duration={1000} smooth={true} >Skills</Link>
            <Link className="item" to="portfolios" duration={1000} smooth={true} >Portfolios</Link>
            <Link className="item" to="hobbies" duration={1000} smooth={true}>Hobbies</Link>
            <Link className="item" to="certificate" duration={1000} smooth={true}>Certificate</Link>
            
        </div>
    )
}

export default SidebarContent
