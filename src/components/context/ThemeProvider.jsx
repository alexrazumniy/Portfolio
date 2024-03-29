import { useState, createContext } from 'react';
import { useTranslation } from "react-i18next";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const themes = ['theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5'];
  const [currentTheme, setCurrentTheme] = useState("");

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    // добавить логику сохранения текущей темы (в localStorage)
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, themes, changeTheme, t, changeLanguage }}>
      {props.children}
    </ThemeContext.Provider>
  );
};