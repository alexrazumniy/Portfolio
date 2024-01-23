import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import location_sign from "../../assets/icons/location_anim.svg";
import phone from "../../assets/icons/phone.svg";
import telegram_small from "../../assets/icons/telegram_small.svg";
import viber from "../../assets/icons/viber.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import email from "../../assets/icons/email.svg";
import student_cap from "../../assets/icons/student_cap.svg";
// import portfolio from "../../assets/icons/portfolio.svg";

const AboutMe = () => {
  const { currentTheme, t } = useContext(ThemeContext);

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">{t("About me")}</h1>
        <h5 className="about_me_text">{t("I am interested in")}</h5>
        <h5 className="about_me_text">{t("I am a team player")}</h5>
        <h5 className="about_me_text">{t("Glad to be")}</h5>
        <div className="about_me flex">
          <div className="profile">
            <ul className="personal_info">
              <li className="personal_info__item flex">
                <img className="contact_item_sign"src={location_sign} alt="location_sign" />
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
                <img className="contact_item_sign"src={email} alt="email" />
                <h3>ncecoexp@gmail.com</h3>
              </li>
              {/* <li className="personal_info__item flex">
                <img className="contact_item_sign" src={portfolio} alt="portfolio" />
                <h2>Experience</h2>
              </li> */}
              <li className="personal_info__item flex">
                <img className="contact_item_sign" src={student_cap} alt="student_cap" />
                <h2>{t("Education")}</h2>
              </li>
              <h3>Byte Education IT-school. 2022-2023</h3>
              <h3>{t("Learned")} HTML, CSS, SCSS, JavaScript, React, Redux, Mastered Create-react-app, Vite, React Router, Webpack, Git, Node.js, AJAX</h3>
            </ul>
          </div>
          <div>
            <h3><strong>{t("Hard skills")}</strong></h3>
            <ul className="hard_skills">
              <li className="hard_skills__item">HTML/CSS</li>
              <li className="hard_skills__item">JavaScript</li>
              <li className="hard_skills__item">React</li>
              <li className="hard_skills__item">Vite</li>
              <li className="hard_skills__item">Gulp/Webpack</li>
              <li className="hard_skills__item">Node.js</li>
              <li className="hard_skills__item">Figma</li>
              <li className="hard_skills__item">Corel Draw</li>
              <li className="hard_skills__item">Adobe Photoshop</li>
              <li className="hard_skills__item">Adobe Premiere Pro</li>
            </ul>
          </div>
          <div>
            <h3><strong>{t("Soft skills")}</strong></h3>
            <ul className="soft_skills">
              <li className="soft_skills__item">{t("Communication")}</li>
              <li className="soft_skills__item">{t("Teamwork skills")}</li>
              <li className="soft_skills__item">{t("Easy adaptation")}</li>
              <li className="soft_skills__item">{t("Analytic skills")}</li>
              <li className="soft_skills__item">{t("Attention to details")}</li>
              <li className="soft_skills__item">{t("Self-organization")}</li>
              <li className="soft_skills__item">{t("Getting Things Done")}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
