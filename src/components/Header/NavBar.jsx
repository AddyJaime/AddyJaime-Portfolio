import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-name-title">
        <h1>Addy Jaime</h1>
      </div>

      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={showMenu}>
          Home
        </a>
        <a href="#about" onClick={showMenu}>
          About
        </a>
        <a href="#projects" onClick={showMenu}>
          Projects
        </a>
        <a href="#contacts" onClick={showMenu}>
          Contacts
        </a>
      </div>
      <div className="navbar-toggle" onClick={handleMenuToggle}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
    </header>
  );
};

export default NavBar;
