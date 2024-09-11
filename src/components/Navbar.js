import React, { useState } from "react";
import "./Navbar.css";
import logo from "../img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>
        {}
        <input
          id="checkbox2"
          type="checkbox"
          checked={isOpen}
          onChange={toggleMenu}
        />
        <label className="toggle toggle2" htmlFor="checkbox2">
          <div id="bar4" className="bars"></div>
          <div id="bar5" className="bars"></div>
          <div id="bar6" className="bars"></div>
        </label>

        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
