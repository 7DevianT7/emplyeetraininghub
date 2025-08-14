 
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

import "./OverviewSection.css";

const OverviewSection = () => {
  const cards = [
    {
      module: "MODULE 1",
      title: "Taking charge of your own growth",
      img: overviewUser1,
      bg: overviewBg1,
    },
    {
      module: "MODULE 2",
      title: "Building trust with your team",
      img: overviewUser2,
      bg: overviewBg2,
    },
    {
      module: "MODULE 3",
      title: "Giving and receiving feedback",
      img: overviewUser3,
      bg: overviewBg3,
    },
    {
      module: "MODULE 4",
      title: "Growing your impact",
      img: overviewUser4,
      bg: overviewBg4,
    },
    {
      module: "MODULE 5",
      title: "Empowering others",
      img: overviewUser5,
      bg: overviewBg5,
    },
    {
      module: "MODULE 6",
      title: "Sustainable leadership",
      img: overviewUser6,
      bg: overviewBg6,
    },
  ];

  return (
    <section className="overview-section">
      <div className="overview-container">
        <h2 className="overview-title">Training hub overview</h2>
        <div className="overview-grid">
          {cards.map((card, index) => (
            <div key={index} className="overview-card">
              <div
                className="overview-image-wrapper"
                style={{ backgroundImage: `url(${card.bg})` }}
              >
                <img src={card.img} alt={card.title} className="overview-user" />
              </div>
              <p className="overview-module">{card.module}</p>
              <h3 className="overview-heading">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
