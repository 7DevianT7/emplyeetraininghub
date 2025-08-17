import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import JourneySection from "./components/JourneySection";
import ResourcesSection from "./components/ResourcesSection";
import FAQSection from "./components/FAQSection";
import LastSection from "./components/LastSection";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      {/* Hero */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Overview */}
      <section id="overview">
        <OverviewSection />
      </section>

      {/* Journey */}
      <section id="journey">
        <JourneySection />
      </section>

      {/* Resources */}
      <section id="resources">
        <ResourcesSection />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Last */}
      <section id="last">
        <LastSection />
      </section>
    </div>
  );
};

export default App;
