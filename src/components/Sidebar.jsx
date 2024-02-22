import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";
import BtnDarkMode from "./BtnDarkMode";
import ToggleColorTheme from "./ThemeToggler.jsx";
import ToggleLang from "./LangToggler.jsx";
import Contacts from "./ContactInfo.jsx";

import home from "./../assets/icons/home.svg";
import info from "./../assets/icons/info_sign.svg";
// import phone from "./../assets/icons/phone.svg";
import portfolio from "./../assets/icons/portfolio.svg";
import man from "./../assets/icons/man.svg";
import download_cv from "./../assets/icons/download_cv.svg";


const Sidebar = () => {

  const [isContactsOpen, setContactsOpen] = useState(false);

  const showContacts = () => {
    setContactsOpen((isContactsOpen) => !isContactsOpen);
  }

  const { currentTheme, t } = useContext(ThemeContext);

  return (
    <>
    <div className="sidebar_nav">
      <NavLink to="/">
        <button className={`sidebar_nav__link sidebar_nav__link-${currentTheme}`}>
          <span className="sidebar_nav__link-text">{t("Home")}</span>
          <img src={home} alt="home" className="sidebar_nav__link-image" />
        </button>
      </NavLink>

      <NavLink to="/projects">
        <button className="sidebar_nav__link">
          <span className="sidebar_nav__link-text">{t("Projects")}</span>
          <img src={portfolio} alt="portfolio" className="sidebar_nav__link-image" />
        </button>
      </NavLink>

      <NavLink to="/about_me">
        <button className="sidebar_nav__link">
          <span className="sidebar_nav__link-text">{t("About me")}</span>
          <img src={man} alt="man" className="sidebar_nav__link-image" />
        </button>
      </NavLink>

      <NavLink to="/contact_me">
        <button className="sidebar_nav__link">
          <span className="sidebar_nav__link-text">{t("Contact me")}</span>
          <img src={man} alt="man" className="sidebar_nav__link-image" />
        </button>
      </NavLink>

      <button onClick={showContacts} className="sidebar_nav__link">
        <span className="sidebar_nav__link-text">{t("Contacts")}</span>
        <img src={info} alt="info" className="sidebar_nav__link-image" />
      </button>

      <a href="" className="sidebar_nav__link" onClick={(e) => e.preventDefault()}>
        {/* <a href="/src/assets/CV_Rozumniy_Oleksii_Frontend.pdf" className="sidebar_nav__link" download="CV_Rozumniy_Oleksii_Frontend.pdf" > */}

        <p className="sidebar_nav__link-text">{t("Download CV")}</p>
        <img src={download_cv} alt="download_cv" className="sidebar_nav__link-image" />
      </a>

      {/* <img className="toggle_color_icon" onClick={toggleMenu} src={color_switcher} alt="color_switcher" /> */}


      <ToggleColorTheme />
      {/* <ToggleLang /> */}
      {/* <BtnDarkMode /> */}
    </div>
    {isContactsOpen && <Contacts />}
  </>
  );
};

export default Sidebar;
