import myImage from "../../assets/images/profile-pic.jpeg";

import "./HomePage.css";

const Home = () => {
  return (
    <div className="home">
      <div className="image">
        <img src={myImage} alt="Addy Jaime Profile Picture" />
      </div>
      <div className="text">
        <p className="greeting">Hello, I&apos;m</p>
        <h1>Addy Jaime</h1>
        <p className="title">🚀 Software Engineer | Full-Stack Developer</p>
        <div className="btns">
          <button>Dowloand CV</button>
          <button>Contact Info</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
