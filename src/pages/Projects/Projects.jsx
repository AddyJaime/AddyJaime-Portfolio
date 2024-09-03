import "./Projects.css";
import PropTypes from "prop-types";

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
      </div>

      <div className="projects-buttons">
        <a href={githubUrl} className="btn github-btn">
          Github
        </a>
        <a href={liveDemoUrl} className="btn demo-btn">
          LiveDemo
        </a>
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
      title: "Project One",
      description: "Better Communication with Each Other",
      imageUrl: "url_to_image1",
      githubUrl: "https://github.com/your-repo1",
      liveDemoUrl: "https://your-live-demo1.com",
    },
    {
      title: "Project Two",
      description: "Stop Scrolling!",
      imageUrl: "url_to_image2",
      githubUrl: "https://github.com/your-repo2",
      liveDemoUrl: "https://your-live-demo2.com",
    },
    {
      title: "Project Three",
      description: "Available now on the app",
      imageUrl: "url_to_image3",
      githubUrl: "https://github.com/your-repo3",
      liveDemoUrl: "https://your-live-demo3.com",
    },
  ];

  return (
    <div className="projects-section">
      <h3>My recent Projects</h3>
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
