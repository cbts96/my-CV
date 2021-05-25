import "./App.scss";
import SideBar from "./component/SideBar/SideBar";
import MainPage from "./component/Mainpage/MainPage";
import { Preloader } from "react-materialize";
import HelloToast from "./component/HelloToast/HelloToast";
import ScrollToTop from "./component/ScrollTotTop/ScrollTop";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {Link} from "react-scroll";
function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 1310px)",
  });
  return (
    <div classNameName="App">
      <HelloToast />
      {loading ? (
        <Preloader active color="blue" flashing={false} size="small" />
      ) : (
        <>
          <ScrollToTop />
          <SideBar />
          <MainPage />
        </>
      )}
      {isTabletOrMobileDevice ? 
      <div className="navigation">

<input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

<label for="navi-toggle" className="navigation__button">
    <span className="navigation__icon">&nbsp;</span>
</label>
<label for="navi-toggle" className="navigation__button2">
    <span className="navigation__icon">&nbsp;</span>
</label>

<div className="navigation__background">&nbsp;</div>

<nav className="navigation__nav">
    {/* <ul className="navigation__list">
        <li className="navigation__item"><a href="#" className="navigation__link">About Natous</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link">Your benfits</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link">Popular tours</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link">Stories</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link">Book now</a></li>
    </ul> */}
    <ul className="navigation__list">
    <Link className="item" to="about" duration={1000} smooth={true}>About</Link>
            <Link className="item" to="education" duration={1000} smooth={true} >Education</Link>
            <Link className="item" to="ex" duration={1000} smooth={true} >Experince</Link>
            <Link className="item" to="skills" duration={1000} smooth={true} >Skills</Link>
            <Link className="item" to="portfolios" duration={1000} smooth={true} >Portfolios</Link>
            <Link className="item" to="hobbies" duration={1000} smooth={true}>Hobbies</Link>
            <Link className="item" to="certificate" duration={1000} smooth={true}>Certificate</Link>
    </ul>
</nav>

        
      </div> : null}
    </div>
  );
}

export default App;




