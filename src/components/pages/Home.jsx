import { useState, useContext } from "react";
import { ThemeContext } from "../../components/context/ThemeProvider.jsx";
import MyPhotoWithAnimation from "../MyPhoto.jsx";
import Contacts from "../ContactInfo.jsx";
import info from "../../assets/icons/info_sign.svg";

const Home = () => {
  const { currentTheme, t } = useContext(ThemeContext);
  const [isContactsOpen, setContactsOpen] = useState(null);

  const showContacts = () => {
    setContactsOpen((isContactsOpen) => !isContactsOpen);
  }

  return (
    <main className="section flex">
        <MyPhotoWithAnimation />      
      <div className={`header flex header-${currentTheme}`}>
        <div className="intro">
          <h1 className="intro_name">
            <em>{t("Alex Rozumniy")}</em>
            <br />{t("Frontend developer")}
          </h1>
          <div className="intro_slogan">
            <p>{t("with passion for learning and creating")}</p>
          </div>
          <p className="intro_text">{t("I am a beginner frontend developer")}</p>
          <button onClick={showContacts} className="contacts_menu_button"
          >
            <span className="contacts_menu_button-text">{t("About me")}</span>
            <img src={info} alt="info" className="contacts_menu_button-image" />
          </button>
        </div>
      </div>
      {isContactsOpen && <Contacts />}

    </main>
  );
};

export default Home;
