import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div id="contacts" className="contact-section">
      <h1>Get in Touch</h1>
      <p>Contact Me</p>

      <div className="contact-info">
        <div>
          <FontAwesomeIcon icon={faEnvelope} /> Mail: Addyjaime@gmail.com
        </div>
        <div>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/addyjaime/">LinkedIn</a>
        </div>
      </div>

      <footer className="footer-section">
        <p>Copyright © 2024 Addy Jaime. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
