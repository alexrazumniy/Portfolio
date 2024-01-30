import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";
import MyPhotoWithAnimation from "./MyPhoto.jsx";

import location_sign from "./../assets/icons/location_anim.svg";
import phone from "./../assets/icons/phone.svg";
import telegram_small from "./../assets/icons/telegram_small.svg";
import viber from "./../assets/icons/viber.svg";
import whatsapp from "./../assets/icons/whatsapp.svg";
import email from "./../assets/icons/email.svg";

import Button from "./Button.jsx";

const Header = () => {
  const { currentTheme, t } = useContext(ThemeContext);

  return (
    <div>
      <header className={`header flex header-${currentTheme}`}>
        <MyPhotoWithAnimation />

        <div className="intro">
          <h1 className="intro_name">
            <em>{t("Alex Rozumniy")}</em>
            <br />{t("Frontend developer")}
          </h1>

          <div className="intro_slogan">
            <p>{t("with passion for learning and creating")}</p>
          </div>
          <p className="intro_text">{t("I am a beginner frontend developer")}</p>
        </div>

        <div className="profile">
          <ul className="personal_info">
            <li className="personal_info__item flex">
              <img className="contact_item_sign" src={location_sign} alt="location_sign" />
              <h3>{t("Kharkiv, Ukraine")}</h3>
            </li>
            <li className="personal_info__item flex">
              <img className="contact_item_sign" src={phone} alt="phone" />
              <h3>+38 099 633 56 44</h3>
            </li>
            <li className="personal_info__item flex">
              <img className="contact_item_sign" src={whatsapp} alt="whatsapp" />
              <img className="contact_item_sign" src={viber} alt="viber" />
              <img className="contact_item_sign" src={telegram_small} alt="telegram" />
              <h3>+38 099 633 56 44</h3>
            </li>
            <li className="personal_info__item flex">
              <img className="contact_item_sign" src={email} alt="email" />
              <h3>ncecoexp@gmail.com</h3>
            </li>
          </ul>
        </div>

        <Button />
      </header>
    </div>
  );
};

export default Header;
