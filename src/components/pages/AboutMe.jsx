import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Contacts = () => {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <main className="section">
      <div className="contacts_container">
        <h1 className="title-1">About Me</h1>
        <h5 className="about_me">I am interested in UI/UX design and front-end development.
          My goal as a developer is to apply my technical
          skills to web development, creating interesting web applications,
          cool user interfaces, and vivid, memorable web pages
          that you want to visit again and again.
          I am a team player open to change and will strive to bring
          success to the company by developing optimal algorithms
          and approaches that will solve problems in front-end development.
          Glad to be part of a team in an interesting project</h5>
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
        <h1>Additional info</h1>
        <p>certificate</p>
      </div>
    </main>
  );
};

export default Contacts;
