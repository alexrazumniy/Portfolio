import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./context/ThemeProvider";
import color_switcher from "../assets/icons/color_switcher.svg";

const ToggleTheme = () => {
  const { themes, changeTheme } = useContext(ThemeContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [rotatedButtons, setRotatedButtons] = useState({});
  const menuRef = useRef(null);


  const toggleMenu = () => {
    setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  const handleClickRotate = (theme) => {
    setRotatedButtons((prevRotatedButtons) => ({ ...prevRotatedButtons, [theme]: !prevRotatedButtons[theme] }));
  };

  const handleMouseLeave = (theme) => {
    setRotatedButtons((prevRotatedButtons) => ({
      ...prevRotatedButtons, [theme]: false
    }));
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      {/* <p className="theme-title">Change your theme color</p> */}
      {/* Вставить как подсказку! */}
      <img className="color_switcher_icon" onClick={toggleMenu} src={color_switcher} alt="color_switcher" />
      {isMenuOpen && (
        <div className="theme-container">
          {themes.map((theme) => (
            <button className={`btn-color-theme btn-color-${theme} ${rotatedButtons[theme] ? "rotated" : ""}`} key={theme}
              onClick={() => { changeTheme(theme); handleClickRotate(theme) }}
              onMouseLeave={() => handleMouseLeave(theme)}
            >
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToggleTheme;