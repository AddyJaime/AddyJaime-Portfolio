import "./Projects.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubUrl,
  liveDemoUrl,
}) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="projects-buttons">
          <div className="btn-container">
            <a href={githubUrl} className="btn github-btn">
              Code
              <FontAwesomeIcon className="github-icon" icon={faGithub} />
            </a>
            <a href={liveDemoUrl} className="btn demo-btn">
              LiveDemo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  liveDemoUrl: PropTypes.string.isRequired,
};

const Projects = () => {
  const projectData = [
    {
      title: "Cofounder-Matcher",
      description:
        "Great things happen when great minds come together, This is an application to enable students to find and connect with other people on their campuses that are also interested in founding or working on a new business.",
      imageUrl: "../../../public/cofoundermatcher.jpg",
      githubUrl:
        "https://github.com/AddyJaime/cohorty-frontend?tab=readme-ov-file",
      liveDemoUrl: "https://cofounder-matcher.vercel.app/",
    },
    {
      title: "Cohorty",
      description:
        "Cohorty is a modern web application designed to facilitate the tracking of courses, students, and assignments for General Assembly.",
      imageUrl: "../../../public/cohorty.jpg",
      githubUrl: "https://github.com/your-repo2",
      liveDemoUrl: "https://your-live-demo2.com",
    },
    {
      title: "Project Three",
      description: "Available now on the app",
      imageUrl: "url_to_image3",
      githubUrl: "https://github.com/AddyJaime/DicciApp",
      liveDemoUrl: "https://your-live-demo3.com",
    },
  ];

  return (
    <div className="projects-section">
      <h3>Portafolio</h3>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            liveDemoUrl={project.liveDemoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
