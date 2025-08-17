import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // ✅ ubaci svoj logo ovde

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Linkovi */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="#hero" onClick={toggleMenu}>Home</a>
        <a href="#overview" onClick={toggleMenu}>Overview</a>
        <a href="#journey" onClick={toggleMenu}>Journey</a>
        <a href="#resources" onClick={toggleMenu}>Resources</a>
        <a href="#faq" onClick={toggleMenu}>FAQ</a>
        <a href="#last" onClick={toggleMenu}>Contact</a>
      </div>

      
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
