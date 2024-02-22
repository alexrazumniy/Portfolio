import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";
import MyPhotoWithAnimation from "./MyPhoto.jsx";
import Contacts from "./ContactInfo.jsx";

const Header = () => {
  const { currentTheme, t } = useContext(ThemeContext);

  return (
    <div>
      <header className={`header flex header-${currentTheme}`}>
        <MyPhotoWithAnimation />
        {/* Name and intro text */}
        <div className="intro">
          <h1 className="intro_name">
            <em>{t("Alex Rozumniy")}</em>
            <br />{t("Frontend developer")}
          </h1>
          <div className="intro_slogan">
            {/* <p>{t("with passion for learning and creating")}</p> */}
          </div>
          <p className="intro_text">{t("I am a beginner frontend developer")}</p>
          {/* <Contacts /> */}
        </div>

        
      </header>
    </div>
  );
};

export default Header;
