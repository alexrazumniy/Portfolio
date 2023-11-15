import user_photo from "../assets/my_photo.jpg";

const Header = () => {
  return (
    <div>
      <header className="header">
      {/* <img className="user_photo" src={user_photo} alt="user_photo" /> */}
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Alex</em>
            </strong>
            <br />a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          {/* optionally!!! */}
          <p>I am a beginner frontend developer. My goal as a developer is to apply
            my technical skills to web development, creating interesting
            applications, cool user interfaces, and vivid, memorable web pages
            that you want to visit again and again. I am a team player open to
            change and will strive to bring success to the company by developing
            optimal algorithms and approaches that will solve problems that arise
            in Frontend development. <br />
            I read technical literature in English, watch
            shows and listen to podcasts.</p>
          <a href="#!" className="btn">
            Download CV
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
