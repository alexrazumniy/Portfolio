import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./context/ThemeProvider";
import color_switcher from "../assets/icons/color_switcher.svg";

const ToggleColorTheme = () => {
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
    <div ref={menuRef} className="toggle_color_container">
    {/* <div ref={menuRef} className={`toggle_color_container ${isMenuOpen ? "open" : ""}`}> */}
      <img className="toggle_color_icon" onClick={toggleMenu} src={color_switcher} alt="color_switcher" />
      {/* <p className="theme-title">Change your theme color</p> */}
      {/* Вставить как подсказку! */}
      {isMenuOpen && (
        <div className={`toggle_color_menu ${isMenuOpen ? "open" : ""}`}>
          {themes.map((theme) => (
            <button className={`toggle_color_btn toggle_color_btn-${theme} ${rotatedButtons[theme] ? "rotated" : ""}`} key={theme}
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

export default ToggleColorTheme;