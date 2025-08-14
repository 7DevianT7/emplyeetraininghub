import React from "react";
import "./FAQSection.css";

import arrowIcon from "../assets/arrow.png";
import circleBg from "../assets/circle-bg.png";

const faqs = [
  {
    question: "How long is the program?",
    answer:
      "Having an FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users.",
  },
  {
    question: "Who is eligible?",
    answer:
      "Having an FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users.",
  },
  {
    question: "What if I miss a scheduled training session?",
    answer:
      "Having an FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users.",
  },
];

const FAQSection = () => {
  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQs</h2>
      <div className="faq-grid">
        {faqs.map((faq, i) => (
          <div key={i} className="faq-card">
            <div className="faq-icon-wrapper">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={circleBg}
                  alt="Circle background"
                  className="faq-circle"
                />
                <img src={arrowIcon} alt="Arrow" className="faq-arrow" />
              </a>
            </div>
            <div className="faq-title-wrapper">
              <h3>{faq.question}</h3>
            </div>
            <div className="faq-text-wrapper">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
