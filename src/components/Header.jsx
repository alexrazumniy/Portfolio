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
      <header className="header flex">
          <MyPhotoWithAnimation />
        <div className={`header__wrapper header__wrapper-${currentTheme}`}>
          <h1 className="header__title">
            <strong>
              <em>{t("Alex Rozumniy")}</em>
            </strong>
            <br />{t("Frontend developer")}
          </h1>

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
