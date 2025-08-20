import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FAQSection.css";

import arrowIcon from "../assets/arrow.png";
import circleBg from "../assets/circle-bg.png";

const faqs = [
  {
    question: "How long is the program?",
    answer:
      "The program typically lasts 6 weeks, with each week focused on a different leadership skill."
  },
  {
    question: "Who is eligible?",
    answer:
      "The program is open to tech professionals who are eager to grow their leadership skills."
  },
  {
    question: "What if I miss a scheduled training session?",
    answer:
      "All sessions are recorded and you’ll have access to catch up at your own pace."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const titleText = "FAQs";

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      {/* Naslov slovo po slovo */}
      <motion.h2
        className="faq-title"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {titleText.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4 }}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>

      {/* Kartice */}
      <div className="faq-grid">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="faq-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            onClick={() => toggleFAQ(i)}
          >
            <div className="faq-header">
              <div className="faq-icon-wrapper">
                <motion.img
                  src={circleBg}
                  alt="Circle background"
                  className="faq-circle"
                  animate={{ rotate: activeIndex === i ? 360 : 0 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.img
                  src={arrowIcon}
                  alt="Arrow"
                  className="faq-arrow"
                  animate={{
                    x: activeIndex === i ? 5 : 0
                  }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
              <h3>{faq.question}</h3>
            </div>

            <motion.div
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={
                activeIndex === i
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.4 }}
            >
              <p>{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
