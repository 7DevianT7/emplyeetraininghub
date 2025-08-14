import React from "react";
import "./ResourcesSection.css";

 
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import romb1 from "../assets/romb1.png";
import romb2 from "../assets/romb2.png";
import romb3 from "../assets/romb3.png";

const ResourcesSection = () => {
  const cards = [
    {
      title: "Essentials handbook",
      description: "Give your audience a short description of this resource.",
      personImg: user1,
      bgColor: "#CDE5FF",
      bgShape: romb1,
    },
    {
      title: "Training journal",
      description: "Give your audience a short description of this resource.",
      personImg: user2,
      bgColor: "#B9F2B3",
      bgShape: romb2,
    },
    {
      title: "Modules",
      description: "Give your audience a short description of this resource.",
      personImg: user3,
      bgColor: "#A7B7FF",
      bgShape: romb3,
    },
  ];

  return (
    <div className="overview-section">
      <h2 className="overview-title">Training resources</h2>
      <div className="overview-cards">
        {cards.map((card, index) => (
          <div key={index} className="overview-card">
            {/* Gornji dio sa rombom i slikom osobe */}
            <div
              className="image-container"
              style={{ backgroundColor: card.bgColor }}
            >
              {card.bgShape && (
                <img
                  src={card.bgShape}
                  alt="Background shape"
                  className="bg-shape"
                />
              )}
              <img
                src={card.personImg}
                alt={card.title}
                className="person-image"
              />
            </div>

            {/* Tekst i dugme ispod slike */}
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <button className="read-more">READ MORE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
