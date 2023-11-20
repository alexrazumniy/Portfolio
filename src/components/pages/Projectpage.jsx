import { useParams } from "react-router-dom";
// import BtnGitHub from "../BtnGitHub";
import { projectslist } from "../../helpers/projectsList";

const Projectpage = () => {
  const { id } = useParams();
  const project = projectslist[id];

  return (
    <main className="section">
      <div className="container">
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

          <a className="btn-outline" href={project.link} target="_blank" rel="noreferrer">
            See it !
          </a>

          {/* {project.link && <BtnGitHub link={project.link} />} */}
        </div>
      </div>
    </main>
  );
};

export default Projectpage;
