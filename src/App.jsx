import React from "react";
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
      <HeroSection />
      <OverviewSection />
      <JourneySection />
      <ResourcesSection />
      <FAQSection />
      <LastSection />
    </div>
  );
};

export default App;