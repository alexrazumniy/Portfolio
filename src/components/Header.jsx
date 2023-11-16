import MyPhotoWithAnimation from "../components/utils/photoWithAnimation.jsx";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__wrapper">
          <MyPhotoWithAnimation />
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Alex</em>
            </strong>
            <br />I`m a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          {/* optionally!!! */}
          <p>I am a beginner frontend developer. My goal is to apply
            my technical skills to web development, creating interesting
            applications, cool user interfaces, and vivid, memorable web pages
            that you want to visit again and again. I am a team player open to
            change and will strive to bring success to the company by developing
            optimal algorithms and approaches that will solve problems that arise
            in Frontend development</p>
          <a href="#!" className="btn">
            Download CV
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
