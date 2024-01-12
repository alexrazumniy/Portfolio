import Project from "../Project";
import { projectslist } from "../../helpers/projectsList";

const Projects = () => {

  return (
    <main className="section">
      <p className="title-1">Projects</p>
      <ul className="projects">
        {projectslist.map((project, id) => {
          return <Project key={id} title={project.title} img={project.img} id={id} />;
        })}
      </ul>
    </main>
  );
};

export default Projects;
