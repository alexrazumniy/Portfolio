import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Contacts = () => {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="contact_info">
          {/* <li className="contact_info__item"> */}
          <li className={`contact_info__item contact_info__item-${currentTheme}`}>
            <h2 className="title-2">Location</h2>
            <p className="contact_info__city">Kharkiv, Ukraine</p>
          </li>
          {/* <li className="contact_info__item"> */}
          <li className={`contact_info__item contact_info__item-${currentTheme}`}>
            <h2 className="title-2">Telegram / WhatsApp / Viber</h2>
            <p className="contact_info__messengers">
              <a href="tel:+380996335644">+38 (099) 633-56-44</a>
            </p>
          </li>
          {/* <li className="contact_info__item"> */}
          <li className={`contact_info__item contact_info__item-${currentTheme}`}>
            <h2 className="title-2">Email</h2>
            <p className="contact_info__email">
              <a href="mailto:ncecoexp@gmail.com">ncecoexp@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
