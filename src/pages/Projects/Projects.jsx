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
  desktopOnly,
}) => {
  return (
    <div id="projects" className="project-card">
      <h1>&lsquo;🚀 What I&apos;ve Built</h1>
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
              Live Site
            </a>
          </div>
          {desktopOnly && (
            <p className="desktop-only-note">Available on desktop only</p>
          )}
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
  className: PropTypes.string.isRequired,
  desktopOnly: PropTypes.string.isRequired,
};

const Projects = () => {
  const projectData = [
    {
      title: "Cofounder-Matcher",
      description:
        "Great things happen when great minds come together, This is an application to enable students to connect with other people on their campuses.",
      imageUrl: "/cofoundermatcher.jpg",
      githubUrl:
        "https://github.com/AddyJaime/cohorty-frontend?tab=readme-ov-file",
      liveDemoUrl: "https://cofounder-matcher.vercel.app/",
      desktopOnly: false,
    },
    {
      title: "Cohorty",
      description:
        "Cohorty is a modern web application designed to facilitate the tracking of courses, students, and assignments for General Assembly.",
      imageUrl: "/cohorty.jpg",
      githubUrl: "https://github.com/your-repo2",
      liveDemoUrl: "https://your-live-demo2.com",
      desktopOnly: true,
    },
    {
      title: "DicciApp",
      description:
        "DicciApp is a dictionary application that lets you easily find, add, and remove your favorite words. Whether you love words or just want to learn more. ",
      imageUrl: "/bc23e5a4-dcf1-4f50-94d9-aa143a840cc7.jpg",
      githubUrl: "https://github.com/AddyJaime/DicciApp",
      liveDemoUrl: "https://your-live-demo3.com",
      desktopOnly: true,
    },
  ];

  return (
    <div className="projects-section">
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index + "-project"}
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
