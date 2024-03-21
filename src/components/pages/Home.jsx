import { useContext } from "react";
import { ThemeContext } from "../../components/context/ThemeProvider.jsx";
import MyPhotoWithAnimation from "../MyPhoto.jsx";

const Home = () => {
  const { currentTheme, t } = useContext(ThemeContext);

  return (
    <main className="section">
      <div className={`header flex header-${currentTheme}`}>
        <MyPhotoWithAnimation />
        {/* Name and intro text */}
        <div className="intro">
          <h1 className="intro_name">
            <em>{t("Alex Rozumniy")}</em>
            <br />{t("Frontend developer")}
          </h1>
          <div className="intro_slogan">
            <p>{t("with passion for learning and creating")}</p>
          </div>
          <p className="intro_text">{t("I am a beginner frontend developer")}</p>
          {/* <Contacts /> */}
        </div>
      </div>
    </main>
  );
};

export default Home;
