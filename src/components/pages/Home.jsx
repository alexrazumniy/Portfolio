import Header from "../Header";
import Skills from "../Skills";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            {/* <li className="content-list__item"> */}
            {/* <p>
                JavaScript, React, Redux, HTML, SCSS, NPM,
                NodeJS, BootStrap, MaterialUI, Yarn, TailwindCSS,
                StyledComponents
              </p> */}
            {/* </li> */}
            {/* <li className="content-list__item"> */}
            {/* <p>Figma, Adobe Photoshop, Corel Draw</p> */}
            {/* </li> */}
          </ul>
          <Skills />
        </div>
      </main >
    </>
  );
};

export default Home;
