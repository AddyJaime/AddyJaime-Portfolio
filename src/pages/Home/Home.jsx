import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>👋🏻 Hi, I am </h1>
        <h2>Addy Jaime</h2>
        <h3> 🚀 Software Enginner | Full Stack Developer</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil beatae
          pariatur, consectetur modi dolore quibusdam libero hic assumenda
          asperiores incidunt quos aperiam distinctio, velit perspiciatis illum
          aliquid repellendus quidem doloribus?
        </p>
      </div>

      <div className="social-icons">
        <a href="https://www.instagram.com/addyjaime_/">
          <FontAwesomeIcon className="ig-icon" icon={faInstagramSquare} />
        </a>
        <a href="https://github.com/AddyJaime"></a>
        <FontAwesomeIcon className="github-icon" icon={faGithub} />

        <a href="https://www.linkedin.com/in/addyjaime/"></a>
        <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />
      </div>

      <div className="buttons">
        <button>Resume</button>
        <button>Contact</button>
      </div>
    </section>
  );
};

export default Home;
