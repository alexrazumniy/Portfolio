import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";

import location_sign from "./../assets/icons/location_anim.svg";
import phone from "./../assets/icons/phone.svg";
import telegram_small from "./../assets/icons/telegram_small.svg";
import viber from "./../assets/icons/viber.svg";
import whatsapp from "./../assets/icons/whatsapp.svg";
import email from "./../assets/icons/email_black.svg";

const Contacts = () => {
  const { currentTheme, t } = useContext(ThemeContext);

  return (
    <div className="contacts">
      <div className="contact_info">
        <div className="contact_info__item flex">
          <img className="contact_sign" src={location_sign} alt="location_sign" />
          <p className="contact_text">{t("Kharkiv, Ukraine")}</p>
        </div>
        <div className="contact_info__item flex">
          <img className="contact_sign" src={phone} alt="phone" />
          <p className="contact_text">+38 099 633 56 44</p>
        </div>
        <div className="contact_info__item flex">
          <img className="contact_sign" src={whatsapp} alt="whatsapp" />
          <img className="contact_sign" src={viber} alt="viber" />
          <img className="contact_sign" src={telegram_small} alt="telegram" />
          <p>+38 099 633 56 44</p>
        </div>
        <div className="contact_info__item flex">
          <img className="contact_sign" src={email} alt="email" />
          <p className="contact_text">ncecoexp@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contacts;