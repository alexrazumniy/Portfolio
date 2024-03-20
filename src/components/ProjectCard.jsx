import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ id, img, title }) => {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <NavLink to={`/project/${id}`}>
      <li className={`project project-${currentTheme}`}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default ProjectCard;
