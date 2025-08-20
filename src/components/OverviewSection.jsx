import React from "react";
import { motion } from "framer-motion";
import "./OverviewSection.css";

import overviewUser1 from "../assets/overviewUser1.png";
import overviewUser2 from "../assets/overviewUser2.png";
import overviewUser3 from "../assets/overviewUser3.png";
import overviewUser4 from "../assets/overviewUser4.png";
import overviewUser5 from "../assets/overviewUser5.png";
import overviewUser6 from "../assets/overviewUser6.png";

import overviewBg1 from "../assets/overviewBg1.png";
import overviewBg2 from "../assets/overviewBg2.png";
import overviewBg3 from "../assets/overviewBg3.png";
import overviewBg4 from "../assets/overviewBg4.png";
import overviewBg5 from "../assets/overviewBg5.png";
import overviewBg6 from "../assets/overviewBg6.png";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
};

const OverviewSection = () => {
  const cards = [
    {
      module: "MODULE 1",
      title: "Taking charge of your own growth",
      img: overviewUser1,
      bg: overviewBg1,
      href: "#module-1",
    },
    {
      module: "MODULE 2",
      title: "Building trust with your team",
      img: overviewUser2,
      bg: overviewBg2,
      href: "#module-2",
    },
    {
      module: "MODULE 3",
      title: "Giving and receiving feedback",
      img: overviewUser3,
      bg: overviewBg3,
      href: "#module-3",
    },
    {
      module: "MODULE 4",
      title: "Growing your impact",
      img: overviewUser4,
      bg: overviewBg4,
      href: "#module-4",
    },
    {
      module: "MODULE 5",
      title: "Empowering others",
      img: overviewUser5,
      bg: overviewBg5,
      href: "#module-5",
    },
    {
      module: "MODULE 6",
      title: "Sustainable leadership",
      img: overviewUser6,
      bg: overviewBg6,
      href: "#module-6",
    },
  ];

  return (
    <section className="overview-section">
      <div className="overview-container">
        <h2 className="overview-title">Training hub overview</h2>

        <motion.div
          className="overview-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.href}
              className="overview-card"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <div className="overview-image-wrapper">
                {/* pulsirajući bg shape (predlog 4) */}
                <div
                  className="bg-shape"
                  style={{ backgroundImage: `url(${card.bg})` }}
                />
                {/* “parallax feel” – blago pomjeranje user fotke na hover */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="overview-user"
                />
              </div>

              {/* dinamični tekstovi (predlog 3) */}
              <p className="overview-module">{card.module}</p>
              <h3 className="overview-heading">{card.title}</h3>

              {/* interakcija / read more (predlog 6) */}
              <span className="overview-cta">
                Read more <span className="arrow">→</span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
