import "./Projects.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { isMobile } from "react-device-detect";

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
      <h1>🚀 What I&apos;ve Built</h1>
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="projects-buttons">
          <div className="btn-container">
            {desktopOnly && isMobile ? (
              <p className="desktop-only-warning">
                This project is only available on desktop.
              </p>
            ) : (
              <>
                <a href={githubUrl} className="btn github-btn">
                  Code
                  <FontAwesomeIcon className="github-icon" icon={faGithub} />
                </a>
                <a href={liveDemoUrl} className="btn demo-btn">
                  Live Site
                </a>
              </>
            )}
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
  desktopOnly: PropTypes.bool.isRequired,
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
      title: "GredyKent-Barbershop",
      description:
        "Gredy Kent Barbershop is a professional barbershop offering high-quality grooming services, including haircuts, beard trims, and styling for men.",
      imageUrl: "./gredykentphoto.jpg",
      githubUrl: "https://github.com/AddyJaime/GredykentBarberFrontend",
      liveDemoUrl: "https://gredykent-barbershop.vercel.app/",
      desktopOnly: false,
    },
    {
      title: "DicciApp",
      description:
        "DicciApp is a dictionary application that lets you easily find, add, and remove your favorite words. Whether you love words or just want to learn more. ",
      imageUrl: "/bc23e5a4-dcf1-4f50-94d9-aa143a840cc7.jpg",
      githubUrl: "https://github.com/AddyJaime/DicciApp",
      liveDemoUrl: "https://dicciapp-addyjaime.netlify.app/",
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
            desktopOnly={project.desktopOnly}
            customMessage={project.customMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
