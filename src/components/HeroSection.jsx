import React from "react";
import "./HeroSection.css";
import logo from "../assets/logo.png"; 
import woman from "../assets/woman.png";  
import shape from "../assets/shape.png"; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <img src={logo} alt="Tropic Solutions" className="hero-logo" />
        <h1>
          Employee <br /> Training Hub
        </h1>
        <p className="hero-subtext">
          Elevating tech talents into visionary leaders through innovative
          training and real-world experience.
        </p>
        <button className="hero-btn">Start Learning</button>
      </div>

      <div className="hero-right">
        <div className="hero-shape-wrapper">
          <img src={shape} alt="Background Shape" className="hero-shape" />
          <img src={woman} alt="Woman" className="hero-woman" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
