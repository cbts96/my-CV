import React from "react";

// import SidebarContainer from '../SidebarContainer/SidebarContainer';
import { useMediaQuery } from "react-responsive";
import "materialize-css";
import { SideNav, Button, SideNavItem } from "react-materialize";
import { Link } from "react-scroll";
import "./SideBar.scss";
import C360 from "../../assets/C360.jpg";
const SideBar = ({ showButton }) => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)'
  // })
  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: '(max-width: 1310px)'
  // })

  return (
    <div className="sidenav-container">
      <style></style>
      <SideNav
        id="SideNav-10"
        options={{
          draggable: true,
        }}
      >
        <SideNavItem
          user={{
            background:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxCEvFAEe3ziBvRL7ID-IijbniFupiKJS_nA&usqp=CAU",
            email: "lexuanthang123@gmail.com",
            image: "https://i.imgur.com/Vv2CI6H.jpg",
            name: "Lê Xuân Thắng",
          }}
          userView
          className="background-sidebar"
        />
        <div className="sidebar-content">
          <Link className="item" to="about" duration={1000} smooth={true}>
            About
          </Link>
          <Link className="item" to="education" duration={1000} smooth={true}>
            Education
          </Link>
          <Link className="item" to="ex" duration={1000} smooth={true}>
            Experince
          </Link>
          <Link className="item" to="skills" duration={1000} smooth={true}>
            Skills
          </Link>
          <Link className="item" to="portfolios" duration={1000} smooth={true}>
            Portfolios
          </Link>
          <Link className="item" to="hobbies" duration={1000} smooth={true}>
            Hobbies
          </Link>
          <Link className="item" to="certificate" duration={1000} smooth={true}>
            Certificate
          </Link>
        </div>
      </SideNav>
    </div>
  );
};

export default SideBar;
