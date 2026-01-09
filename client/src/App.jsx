import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home/HomePage";
import AboutSection from "./components/About/AboutSection";
import SearchingVisualizer from "./components/Visualizers/SearchingVisualizer";
import SortingVisualizer from "./components/Visualizers/SortingVisualizer";

const App = () => {
  const [activeView, setActiveView] = useState("home");

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Pass setActiveView to Navbar */}
      <Navbar setActiveView={setActiveView} />

      <div className="pt-20">
        {activeView === "home" && <HomePage setActiveView={setActiveView} />}
        {activeView === "about" && <AboutSection />}
        {activeView === "searching" && <SearchingVisualizer />}
        {activeView === "sorting" && <SortingVisualizer />}
      </div>
    </div>
  );
};

export default App;
