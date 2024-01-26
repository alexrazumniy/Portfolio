import linkedin from "../assets/icons/linkedin_blue.svg";
import github from "../assets/icons/gitHub.svg";
import telegram from "../assets/icons/telegram.svg";
import email from "../assets/icons/email.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="contact_links">
        <li className="contact__link">
          <a href="https://www.linkedin.com/in/alexxraz/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="link" />
          </a>
        </li>
        <li className="contact__link">
          <a href="https://github.com/alexrazumniy" target="_blank" rel="noreferrer">
            <img src={github} alt="link" />
          </a>
        </li>
        <li className="contact__link">
          <a href="https://t.me/alexx_www" target="_blank" rel="noreferrer">
            <img src={telegram} alt="link" />
          </a>
        </li>
        <li className="contact__link">
          <a href="mailto:ncecoexp@gmail.com" target="_blank" rel="noreferrer">
            <img src={email} alt="link" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
