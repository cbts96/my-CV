import React from 'react';
import "./SidebarContainer.scss";
import IconImage from '../IconIamge/IconImage';
import SidebarContent from '../SidebarContent/SidebarContent';
const SidebarContainer = ({toggle}) => {
    return (
        <div className={`sidebar-container ${toggle?"open":"close"}`}>
            <IconImage toggle={toggle}/>
            <SidebarContent/>
        </div>
    )
}

export default SidebarContainer
