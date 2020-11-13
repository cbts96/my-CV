import React from 'react';
import "./SidebarContainer.scss";
import IconImage from '../IconIamge/IconImage';
import SidebarContent from '../SidebarContent/SidebarContent';
const sidebarContainer = () => {
    return (
        <div className="sidebar-container">
            <IconImage/>
            <SidebarContent/>
        </div>
    )
}

export default sidebarContainer
