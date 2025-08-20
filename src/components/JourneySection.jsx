import React from "react";
import { motion } from "framer-motion";
import "./JourneySection.css";
import arrowIcon from "../assets/arrow.png";
import circleBg from "../assets/circle-bg.png";

const steps = [
  {
    title: "Self-paced materials",
    text: "Use this space to talk about your organization’s training program. What makes it relevant and effective? Add that here.",
  },
  {
    title: "Scheduled group workshops and 1-on-1 mentorship",
    text: "Use this space to talk about your organization’s training program. What makes it relevant and effective? Add that here.",
  },
  {
    title: "On-the-job application",
    text: "Use this space to talk about your organization’s training program. What makes it relevant and effective? Add that here.",
  },
];

const JourneySection = () => {
  const headingText = "How your training journey looks like";

  return (
    <section className="journey">
      <div className="journey-left">
        <h2 className="journey-heading">
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.3, color: "#007bff" }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
      </div>

      <div className="journey-right">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="journey-item"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 12px 28px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="icon-wrapper">
              <img src={circleBg} alt="Background" className="circle-bg" />
              <motion.img
                src={arrowIcon}
                alt="Arrow"
                className="arrow-icon"
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </div>
            <div className="journey-text">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JourneySection;
