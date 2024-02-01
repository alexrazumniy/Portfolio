import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";
import BtnDarkMode from "./BtnDarkMode";
import ToggleTheme from "./ThemeToggler.jsx";
import ToggleLang from "./LangToggler.jsx";

import home from "./../assets/icons/home.svg";
import info from "./../assets/icons/info_sign.svg";
// import phone from "./../assets/icons/phone.svg";
import portfolio from "./../assets/icons/portfolio.svg";
import man from "./../assets/icons/man.svg";
import download_cv from "./../assets/icons/download_cv.svg";


const Sidebar = () => {
  const { currentTheme, t } = useContext(ThemeContext);
  const activeLink = "sidebar_nav-list__link--active";
  const normalLink = "sidebar_nav-list__link";

  return (
    <div>
      <nav className="sidebar_nav">
        <ul className="sidebar_nav-list">
          {/* <li className={`sidebar_nav-list__link-${currentTheme}`}> */}
          <li className="sidebar_nav__link">
            <NavLink to="/">
              <img src={home} alt="home" className="sidebar_nav__link-image" />
              <button className="sidebar_nav__link-btn">
                {t("Home")}
              </button>
            </NavLink>
          </li>

          <li className="sidebar_nav__link">
            <img src={info} alt="info" className="sidebar_nav__link-image" />
            <button className="sidebar_nav__link-btn">
              {t("Contacts")}
            </button>
          </li>

          <li className="sidebar_nav__link">
            <NavLink to="/projects">
              <img src={portfolio} alt="portfolio" className="sidebar_nav__link-image" />
              <button className="sidebar_nav__link-btn">
                {t("Projects")}
              </button>
            </NavLink>
          </li>

          <li className="sidebar_nav__link">
            <NavLink to="/about_me">
              <img src={man} alt="man" className="sidebar_nav__link-image" />
              <button className="sidebar_nav__link-btn">
                {t("About me")}
              </button>
            </NavLink>
          </li>

          <li className="sidebar_nav__link">
            <a href="/src/assets/CV_Rozumniy_Oleksii_Frontend.pdf" download="CV_Rozumniy_Oleksii_Frontend.pdf" >
              <img src={download_cv} alt="download_cv" className="sidebar_nav__link-image" />
              <button className="sidebar_nav__link-btn">
                {t("Download CV")}
              </button>
            </a>
          </li>
        </ul>
        <div className="toggle_buttons">
          <ToggleLang />
          <ToggleTheme />
          <BtnDarkMode />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
