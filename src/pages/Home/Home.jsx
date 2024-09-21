import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import imageprof from "../../../src/assets/images/7e5f9680-fc90-459c-927b-3b6725aed139.jpg";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-content">
          <h1> Hi there 👋🏻, I am</h1>
          <h2>Addy Jaime</h2>
          <h3>🚀 Software Enginner | Full Stack Developer</h3>
          <p className="description">
            A passionate Full Stack Developer who helps create web apps that
            people love to use. Based in DE <br />, USA. 📍
          </p>
          <div className="social-icons">
            <a target="_blank" href="https://www.instagram.com/addyjaime.dev">
              <FontAwesomeIcon className="ig-icon" icon={faInstagramSquare} />
            </a>
            <a target="_blank" href="https://github.com/AddyJaime">
              <FontAwesomeIcon className="github-icon" icon={faGithub} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/addyjaime/">
              <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="addy-photo">
          <img src={imageprof} alt="Profile of Addy Jaime" />
        </div>
      </div>
    </section>
  );
};

export default Home;
