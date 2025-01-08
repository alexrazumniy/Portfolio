import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
// import ProjectCard from "../ProjectCard";
import { projectslist } from "../../helpers/projectsList";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  const { currentTheme, t } = useContext(ThemeContext);

  return (
    <main className="section">
      <p className="title-1">{t("Projects")}</p>
      <div className="projects">
        {projectslist.map(({ id, img, title }) => (
          // return <ProjectCard key={id} title={t(project.title)} img={project.img} id={id} />;
          <NavLink key={id} to={`/project/${id}`}>
            <li className={`project project-${currentTheme}`}>
              <img src={img} alt={title} className="project__img" />
              <h3 className="project__title">{title}</h3>
            </li>
          </NavLink>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
