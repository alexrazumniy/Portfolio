import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";
import BtnDarkMode from "./BtnDarkMode";
import ToggleTheme from "./ThemeToggler.jsx";

const Navbar = () => {
  const { currentTheme } = useContext(ThemeContext)
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <div>
      <nav className="nav">
        {/* <div className="container"> */}
        <ToggleTheme/>
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong className={`logo-${currentTheme}`}>My portfolio</strong>
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            {/* <li className="nav-list__link"> */}
            <li className={`nav-list__link nav-list__link-${currentTheme}`}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>

            {/* <li className="nav-list__link"> */}
            <li className={`nav-list__link nav-list__link-${currentTheme}`}>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li>
            {/* <li className="nav-list__link"> */}
            <li className={`nav-list__link nav-list__link-${currentTheme}`}>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
