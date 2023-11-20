import { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const themes = ['theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5'];
  const [currentTheme, setCurrentTheme] = useState("");

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    // добавить логику сохранения текущей темы (в localStorage)
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, themes, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};