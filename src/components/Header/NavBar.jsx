import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-name-title">
        <h1>Addy Jaime</h1>
      </div>

      <div className="navebar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </div>
    </header>
  );
};

export default NavBar;
