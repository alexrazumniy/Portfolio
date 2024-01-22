import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Project from "../Project";
import { projectslist } from "../../helpers/projectsList";

const Projects = () => {
  const { t } = useContext(ThemeContext);

  return (
    <main className="section">
      <p className="title-1">{t("Projects")}</p>
      <ul className="projects">
        {projectslist.map((project, id) => {
          return <Project key={id} title={t(project.project_title)} img={project.img} id={id} />;
        })}
      </ul>
    </main>
  );
};

export default Projects;
