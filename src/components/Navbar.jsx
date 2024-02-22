import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";
import BtnDarkMode from "./BtnDarkMode";
import ToggleColorTheme from "./ThemeToggler.jsx";
import ToggleLang from "./LangToggler.jsx";
import Sidebar from "./Sidebar.jsx";

const Navbar = () => {
  const { currentTheme, t } = useContext(ThemeContext);
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      {/* <NavLink to="/" className="logo">
            <strong className={`logo-${currentTheme}`}>{t("My portfolio")}</strong>
          </NavLink> */}

      <ul className="nav-list">
        <li className={`nav-list__link nav-list__link-${currentTheme}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            {t("Home")}
          </NavLink>
        </li>

        <li className={`nav-list__link nav-list__link-${currentTheme}`}>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            {t("Projects")}
          </NavLink>
        </li>
        <li className={`nav-list__link nav-list__link-${currentTheme}`}>
          <NavLink
            to="/about_me"
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            {t("About me")}
          </NavLink>
        </li>
        <li className={`nav-list__link nav-list__link-${currentTheme}`}>
          <NavLink
            to="/contact_me"
            className={({ isActive }) =>
              isActive ? activeLink : normalLink
            }
          >
            {t("Contact me")}
          </NavLink>
        </li>
      </ul>
      <div className="toggle_buttons">
        <ToggleLang />
        {/* <ToggleColorTheme /> */}
        <BtnDarkMode />
      </div>
    </nav>
  );
};

export default Navbar;
