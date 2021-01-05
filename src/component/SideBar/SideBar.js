import React,{useState} from 'react';

import SidebarContainer from '../SidebarContainer/SidebarContainer';
import "./SideBar.scss";

const SideBar = () => {
    const [toggle,setToggle]=useState(false);
    const CloseSideBarHandler=()=>{
        setToggle(!toggle);
    }
    return (
        <div className="side-bar">
            <div className="click" onClick={CloseSideBarHandler}>&#9776;</div>
            <SidebarContainer toggle={toggle}/>
        </div>
    )
}

export default SideBar
