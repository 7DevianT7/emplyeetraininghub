import React from "react";
import { motion } from "framer-motion";
import "./LastSection.css";

import romb4 from "../assets/romb4.png";
import user4 from "../assets/user4.png";
import logo from "../assets/logo.png";

const text = "We can’t wait to see you grow!";

const LastSection = () => {
  return (
    <section className="last-section">
      {/* Leva trećina */}
      <div className="last-section-left">
        <motion.img
          src={romb4}
          alt="Background Shape"
          className="last-section-bg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={user4}
          alt="Person"
          className="last-section-user"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Desne dve trećine */}
      <div className="last-section-right">
        <div className="title-wrapper">
          <h2>
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.2, color: "#fff176" }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
        </div>

        <motion.div
          className="text-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p>For any questions about the program, please reach out to</p>
        </motion.div>

        <div className="email-wrapper">
          <motion.a
            href="mailto:hello@tropic.com"
            className="email-btn"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255,255,255,0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            hello@tropic.com
          </motion.a>

          <motion.img
            src={logo}
            alt="Tropic Solutions"
            className="last-section-logo"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default LastSection;
