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

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-me-title">
        <h1>Get To Know More</h1>
        <p>About me</p>
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
            I am passionate about software development 💻 because I love
            creating applications that provide real value to users. I focus on
            designing experiences that are both functional and enjoyable. When
            I’m not programming, I like to stay active through workouts 🏋️‍♂️ or
            exploring new places 🌍. Balancing the mental challenges of software
            development with physical activity helps me stay focused and
            energized.
          </p>

          <p>
            In my free time, I enjoy exploring new technologies 🔎and writing
            code.💻 I&apos;m constantly driven by the idea that there is always
            something new to learn and improve. A fun fact about me is that I
            speak three languages—French 🇫🇷, English 🇺🇸, and Spanish 🇩🇴. I also
            love reading adventure and history books, which allow me to
            disconnect and fuel my curiosity about the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
