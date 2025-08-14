import React from "react";
import "./LastSection.css";
import romb4 from "../assets/romb4.png";
import user4 from "../assets/user4.png";
import logo from "../assets/logo.png";

const LastSection = () => {
  return (
    <section className="last-section">
      {/* Leva trećina */}
      <div className="last-section-left">
        <img src={romb4} alt="Background Shape" className="last-section-bg" />
        <img src={user4} alt="Person" className="last-section-user" />
      </div>

      {/* Desne dve trećine */}
      <div className="last-section-right">
        <div className="title-wrapper">
          <h2>We can’t wait to see you grow!</h2>
        </div>
        <div className="text-wrapper">
          <p>For any questions about the program, please reach out to</p>
        </div>
        <div className="email-wrapper">
          <a href="mailto:hello@tropic.com" className="email-btn">
            hello@tropic.com
          </a>
          <img src={logo} alt="Tropic Solutions" className="last-section-logo" />
        </div>
      </div>
    </section>
  );
};

export default LastSection;
