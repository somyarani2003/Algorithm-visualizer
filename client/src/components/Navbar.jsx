import React from "react";

const Navbar = ({ setActiveView }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white flex justify-between items-center p-4 z-50">
      <div
        className="text-2xl font-bold text-cyan-400 cursor-pointer"
        onClick={() => setActiveView("home")}
      >
        AlgoVisualizer
      </div>

      <div className="space-x-4">
        <button onClick={() => setActiveView("home")}>Home</button>
        <button onClick={() => setActiveView("searching")}>Searching</button>
        <button onClick={() => setActiveView("sorting")}>Sorting</button>
        <button onClick={() => setActiveView("about")}>About</button>
      </div>
    </nav>
  );
};

export default Navbar;
