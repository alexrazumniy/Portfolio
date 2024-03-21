import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { useParams, Link } from "react-router-dom";
import { projectslist } from "../../helpers/projectsList";

const Projectpage = () => {
  const { t } = useContext(ThemeContext);
  const { id } = useParams();
  const project = projectslist[id];

  return (
    <div className="project-details">      
      <h1 className="title-1">{project.title}</h1>
      <img
        src={project.img}
        alt={project.title}
        className="project-details__cover"
      />
      <div className="project-details__desc">
        <p>{project.technology}</p>
      </div>
      <button className="view-project-button">
        <a href={project.link} target="_blank" rel="noreferrer">
          {t("See it")}
        </a>
      </button>
      <Link to="/portfolio">
        <button className="go_back_btn">{t("Back to project list")}</button>
      </Link>
    </div>
  );
};

export default Projectpage;
