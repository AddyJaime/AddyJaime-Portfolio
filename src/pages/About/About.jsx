import "./About.css";
import ReactJsIcon from "../../assets/images/icons8-react-js.svg";
import Html5Icon from "../../assets/images/icons8-html5.svg";
import CssIcon from "../../assets/images/icons8-css3.svg";
import JavascriptIcon from "../../assets/images/icons8-javascript.svg";
import NextJsIcon from "../../assets/images/nextjs-icon-svgrepo-com.svg";
import ExpressJsIcon from "../../assets/images/icons8-express-js.svg";
import MongoDBIcon from "../../assets/images/icons8-mongodb.svg";
import MongooseDbIcob from "../../assets/images/icons8-mongoose.svg";
import PostgreSQLIcon from "../../assets/images/icons8-postgresql.svg";
import PythonIcon from "../../assets/images/icons8-python.svg";
import DockerIcon from "../../assets/images/icons8-docker.svg";
import DjangoIcon from "../../assets/images/icons8-django.svg";
import TypeScriptIcon from "../../assets/images/icons8-typescript.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-me-title">
        <h2>About Me </h2>
      </div>
      <div className="about-content">
        <div className="about-skills">
          <h3>Tech Stack </h3>
          <div className="icons">
            <div className="icon-item">
              <img src={ReactJsIcon} alt="" />
              <p>React Js</p>
            </div>
            <div className="icon-item">
              <img src={JavascriptIcon} alt="" />
              <p>Javascript</p>
            </div>
            <div className="icon-item">
              <img src={Html5Icon} alt="" />
              <p>Html5</p>
            </div>
            <div className="icon-item">
              <img src={CssIcon} alt="" />
              <p>Css</p>
            </div>
            <div className="icon-item">
              <img className="nextjs-icon" src={NextJsIcon} alt="" />
              <p>Next js</p>
            </div>
            <div className="icon-item">
              <img className="expressjs-icon" src={ExpressJsIcon} alt="" />
              <p>Express js</p>
            </div>
            <div className="icon-item">
              <img className="mongdb-icon" src={MongoDBIcon} alt="" />
              <p>MongoDB</p>
            </div>
            <div className="icon-item">
              <img className="mongooseDb-icon" src={MongooseDbIcob} alt="" />
              <p>Mongoose</p>
            </div>
            <div className="icon-item">
              <img className="postgreSQl-icon" src={PostgreSQLIcon} alt="" />
              <p>PostgreSQL</p>
            </div>
            <div className="icon-item">
              <img className="python-icon" src={PythonIcon} alt="" />
              <p>Python</p>
            </div>
            <div className="icon-item">
              <img className="docker-icon" src={DockerIcon} alt="" />
              <p>Docker</p>
            </div>
            <div className="icon-item">
              <img className="django-icon" src={DjangoIcon} alt="" />
              <p>Django</p>
            </div>
            <div className="icon-item">
              <img className="typeScript-icon" src={TypeScriptIcon} alt="" />
              <p>TypeScript</p>
            </div>
          </div>
        </div>

        <div className="about-description">
          <h3>More about me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sit iure
            nam earum recusandae quidem minima impedit omnis deleniti distinctio
            quae, fuga accusamus hic accusantium culpa sed eaque voluptatum?
            Aut.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sit iure
            nam earum recusandae quidem minima impedit omnis deleniti distinctio
            quae, fuga accusamus hic accusantium culpa sed eaque voluptatum?
            Aut.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sit iure
            nam earum recusandae quidem minima impedit omnis deleniti distinctio
            quae, fuga accusamus hic accusantium culpa sed eaque voluptatum?
            Aut.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sit iure
            nam earum recusandae quidem minima impedit omnis deleniti distinctio
            quae, fuga accusamus hic accusantium culpa sed eaque voluptatum?
            Aut.
          </p>

          <div className="social-icons">
            <a href="https://www.instagram.com/addyjaime_/">
              <FontAwesomeIcon className="ig-icon" icon={faInstagramSquare} />
            </a>
            <a href="https://github.com/AddyJaime">
              <FontAwesomeIcon className="github-icon" icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/addyjaime/">
              <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
