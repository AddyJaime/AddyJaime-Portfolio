import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuTogle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-name-title">
        <h1>Addy Jaime</h1>
      </div>

      <div className={`navebar-links ${isMenuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </div>
      <div className="navbar-toggle" onClick={handleMenuTogle}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
    </header>
  );
};

export default NavBar;
