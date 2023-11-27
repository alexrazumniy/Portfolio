import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";
import MyPhotoWithAnimation from "./MyPhoto.jsx";
import Button from "./Button.jsx";

const Header = () => {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <div>
      <header className="header">
        <div className={`header__wrapper header__wrapper-${currentTheme}`}>
          <MyPhotoWithAnimation />
          <h1 className="header__title">
            <strong>
              <em>Alex Rozumniy</em>
            </strong>
            <br />Frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating</p>
          </div>
          <p className="header__text__about">I am a beginner frontend developer. My goal is to apply
            my technical skills to web development, creating interesting
            applications, cool user interfaces, and vivid, memorable web pages
            that you want to visit again and again. I am a team player open to
            change and will strive to bring success to the company by developing
            optimal algorithms and approaches that will solve problems that arise
            in Frontend development</p>          
          <Button />
        </div>
      </header>
    </div>
  );
};

export default Header;
