import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";

const ToggleTheme = () => {
  const { currentTheme, themes, changeTheme } = useContext(ThemeContext);

  return (
    <div className="theme-container">
      <p className="theme-title">Change your theme color</p>
      <div>
        {themes.map((theme) => (
          <button className={`btn-theme btn-${theme}`} key={theme} onClick={() => changeTheme(theme)}>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToggleTheme;