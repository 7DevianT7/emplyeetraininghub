import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import logo from "../assets/logo.png";
import woman from "../assets/woman.png";
import shape from "../assets/shape.png";

const text = "Employee Training Hub";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Levi deo */}
      <div className="hero-left">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Tropic Solutions"
          className="hero-logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Tekst sa hover efektom */}
        <h1>
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.3, color: "#007bff" }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Podtekst */}
        <p className="hero-subtext">
          Elevating tech talents into visionary leaders through innovative
          training and real-world experience.
        </p>

        {/* Dugme sa pulse efektom */}
        <motion.button
          className="hero-btn"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Start Learning
        </motion.button>
      </div>

      {/* Desni deo */}
      <div className="hero-right">
        <div className="hero-shape-wrapper">
          {/* Shape sa pulse efektom */}
          <motion.img
            src={shape}
            alt="Background Shape"
            className="hero-shape"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Žena statična */}
          <motion.img
            src={woman}
            alt="Woman"
            className="hero-woman"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
