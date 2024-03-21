import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";
import ToggleColorTheme from "./ThemeToggler.jsx";

import home from "./../assets/icons/home.svg";
import portfolio from "./../assets/icons/portfolio.svg";
import man from "./../assets/icons/man.svg";
import feedback from "./../assets/icons/feedback1.svg";
import download_cv from "./../assets/icons/download_cv.svg";

const hoverAudio = new Audio("../../public/sounds/like_console.mp3")

const Sidebar = () => {
  const playHoverAudio = () => {
    hoverAudio.play();
  };

  const stopHoverAudio = () => {
    hoverAudio.currentTime = 0;
  };

  const { currentTheme, t } = useContext(ThemeContext);

  return (
    <>
      <div className="sidebar_nav">
        <NavLink to="/">
          <button className={`sidebar_nav__link sidebar_nav__link-${currentTheme}`}
            onMouseEnter={() => {
              playHoverAudio();
            }}
            onMouseLeave={() => {
              stopHoverAudio();
            }}
          >
            <span className="sidebar_nav__link-text">{t("Home")}</span>
            <img src={home} alt="home" className="sidebar_nav__link-image" />
          </button>
        </NavLink>

        <NavLink to="/portfolio">
          <button className={`sidebar_nav__link sidebar_nav__link-${currentTheme}`}
            onMouseEnter={() => {
              playHoverAudio();
            }}
            onMouseLeave={() => {
              stopHoverAudio();
            }}
          >
            <span className="sidebar_nav__link-text">{t("Projects")}</span>
            <img src={portfolio} alt="portfolio" className="sidebar_nav__link-image" />
          </button>
        </NavLink>

        <NavLink to="/about_me">
          <button className={`sidebar_nav__link sidebar_nav__link-${currentTheme}`}
            onMouseEnter={() => {
              playHoverAudio();
            }}
            onMouseLeave={() => {
              stopHoverAudio();
            }}
          >
            <span className="sidebar_nav__link-text">{t("About me")}</span>
            <img src={man} alt="man" className="sidebar_nav__link-image" />
          </button>
        </NavLink>

        <NavLink to="/contact_me">
          <button className={`sidebar_nav__link sidebar_nav__link-${currentTheme}`}
            onMouseEnter={() => {
              playHoverAudio();
            }}
            onMouseLeave={() => {
              stopHoverAudio();
            }}
          >
            <span className="sidebar_nav__link-text">{t("Contact me")}</span>
            <img src={feedback} alt="man" className="sidebar_nav__link-image" />
          </button>
        </NavLink>

        <a href="" className="sidebar_nav__link" onClick={(e) => e.preventDefault()}
        >
          {/* <a href="/src/assets/CV_Rozumniy_Oleksii_Frontend.pdf" className="sidebar_nav__link" download="CV_Rozumniy_Oleksii_Frontend.pdf" > */}

          <p className="sidebar_nav__link-text">{t("Download CV")}</p>
          <img src={download_cv} alt="download_cv" className="sidebar_nav__link-image" />
        </a>

        {/* <img className="toggle_color_icon" onClick={toggleMenu} src={color_switcher} alt="color_switcher" /> */}


        <ToggleColorTheme />
        {/* <ToggleLang /> */}
        {/* <BtnDarkMode /> */}
      </div >
      {/* {isContactsOpen && <Contacts />
      } */}
    </>
  );
};

export default Sidebar;