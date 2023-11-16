import linkedin from "../assets/icons/linkedin_blue.svg";
import github from "../assets/icons/gitHub.svg";
import telegram from "../assets/icons/telegram.svg";
import email from "../assets/icons/email.svg";
import phone from "../assets/icons/phone.svg";
import location from "../assets/icons/location.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.linkedin.com/in/alexxraz/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={github} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={email} alt="Link" />
              </a>
            </li>
          </ul>
          {/* <div className="copyright">
            <p>© 2023</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
