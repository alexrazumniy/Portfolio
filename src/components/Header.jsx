import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";
import MyPhotoWithAnimation from "./MyPhoto.jsx";
import Button from "./Button.jsx";

const Header = () => {
  const { currentTheme, t } = useContext(ThemeContext)

  return (
    <div>
      <header className="header">
        <div className={`header__wrapper header__wrapper-${currentTheme}`}>
          <MyPhotoWithAnimation />
          <h1 className="header__title">
            <strong>
              <em>{t("Alex Rozumniy")}</em>
            </strong>
            <br />{t("Frontend developer")}
          </h1>
          <div className="header__text">
            <p>{t("with passion for learning and creating")}</p>
          </div>
          <p className="header__text__about">{t("I am a beginner frontend developer")}</p>          
          <Button />
        </div>
      </header>
    </div>
  );
};

export default Header;
