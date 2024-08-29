import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <p>Addy Jaime</p>
      </div>
      <div className="nav">
        <a href="#about">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
