import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

import location_sign from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";
import telegram_small from "../../assets/icons/telegram_small.svg";
import viber from "../../assets/icons/viber.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import email from "../../assets/icons/email_black.svg";

const ContactMe = () => {
  const { currentTheme, t } = useContext(ThemeContext);


  return (
    <main className="section">
      <h1 className="title-1">Get in Touch</h1>
      <div className="contacts">
        <div className="contacts_field">
          <div className="contacts__item flex">
            <img className="contacts__item_sign" src={location_sign} alt="location_sign" />
            <p className="contacts__item_text">{t("Kharkiv, Ukraine")}</p>
          </div>
          <div className="contacts__item flex">
            <img className="contacts__item_sign" src={viber} alt="viber" />
            <img className="contacts__item_sign" src={whatsapp} alt="whatsapp" />
            <img className="contacts__item_sign" src={phone} alt="phone" />
            <p className="contacts__item_text">+38 099 633 56 44</p>
          </div>
          <div className="contacts__item flex">
            <img className="contacts__item_sign" src={telegram_small} alt="telegram" />
            <p>@alexx_www</p>
          </div>
          <div className="contacts__item flex">
            <img className="contacts__item_sign" src={email} alt="email" />
            <p className="contacts__item_text">ncecoexp@gmail.com</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactMe;