import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { useParams } from "react-router-dom";
// import BtnGitHub from "../BtnGitHub";
import { projectslist } from "../../helpers/projectsList";

const Projectpage = () => {
  const { t } = useContext(ThemeContext);
  const { id } = useParams();
  const project = projectslist[id];

  return (
    <main className="section">
      <div className="project-details">
        <h1 className="title-1">{project.title}</h1>

        {/* <p>{id}</p> */}

        <img
          src={project.img}
          alt={project.title}
          className="project-details__cover"
        />

        <div className="project-details__desc">
          <p>{project.skills}</p>
        </div>
        {/* ADD CLASS!!! */}
        <button>
          <a className="btn-outline" href={project.link} target="_blank" rel="noreferrer">
            {t("See it")}
          </a>
        </button>

        {/* {project.link && <BtnGitHub link={project.link} />} */}
      </div>
    </main>
  );
};

export default Projectpage;
