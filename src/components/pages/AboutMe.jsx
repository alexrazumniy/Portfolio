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
  const { currentTheme } = useContext(ThemeContext);

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">About Me</h1>
        <h5 className="about_me_text">I am interested in UI/UX design and front-end development.
          My goal as a developer is to apply my technical
          skills to web development, creating interesting web applications,
          cool user interfaces, and vivid, memorable web pages
          that you want to visit again and again.<br />
          I am a team player open to change and will strive to bring
          success to the company by developing optimal algorithms
          and approaches that will solve problems in front-end development.<br />
          Glad to be part of a team in an interesting project!</h5>
        <div className="about_me flex">
          <div className="profile">
            <ul className="personal_info">
              <li className="personal_info__item flex">
                <img className="contact_item_sign"src={location_sign} alt="location_sign" />
                <h3>Kharkiv, Ukraine</h3>
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
                <h2>Education</h2>
              </li>
              <h3>Byte Education IT-school. 2022-2023</h3>
              <h3>Learned HTML, CSS, SCSS, JavaScript, React, Redux, Mastered Create-react-app, Vite, React Router, Webpack, Git, Node.js, AJAX</h3>
            </ul>
          </div>
          <div>
            <h3><strong>   Hard skills</strong></h3>
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
            <h3><strong>   Soft skills</strong></h3>
            <ul className="soft_skills">
              <li className="soft_skills__item">Communication</li>
              <li className="soft_skills__item">Teamwork</li>
              <li className="soft_skills__item">Easy adaptation</li>
              <li className="soft_skills__item">Analytic skills</li>
              <li className="soft_skills__item">Attention to details</li>
              <li className="soft_skills__item">Self-organization</li>
              <li className="soft_skills__item">Getting Things Done</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
