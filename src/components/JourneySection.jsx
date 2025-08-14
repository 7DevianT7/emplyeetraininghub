import React from "react";
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
  return (
    <section className="journey">
      <div className="journey-left">
        <h2>How your<br />training journey<br />looks like</h2>
      </div>
      <div className="journey-right">
        {steps.map((step, i) => (
          <div key={i} className="journey-item">
            <div className="icon-wrapper">
              <img src={circleBg} alt="Background" className="circle-bg" />
              <img src={arrowIcon} alt="Arrow" className="arrow-icon" />
            </div>
            <div className="journey-text">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneySection;
