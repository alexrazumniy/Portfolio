import linkedin from "../assets/icons/linkedin_blue.svg";
import github from "../assets/icons/gitHub.svg";
import telegram from "../assets/icons/telegram.svg";
import email from "../assets/icons/email.svg";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.linkedin.com/in/alexxraz/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/alexrazumniy" target="_blank" rel="noreferrer">
                <img src={github} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/alexx_www" target="_blank" rel="noreferrer">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="mailto:ncecoexp@gmail.com" target="_blank" rel="noreferrer">
                <img src={email} alt="Link" />
              </a>
            </li>
          </ul>
        </div>
    </footer>
  );
};

export default Footer;
