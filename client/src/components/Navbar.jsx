import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons

const Navbar = ({ setActiveView }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white flex justify-between items-center px-4 py-3 z-50">
      {/* Logo */}
      <div
        className="text-2xl font-bold text-cyan-400 cursor-pointer"
        onClick={() => setActiveView("home")}
      >
        AlgoVisualizer
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-lg">
        <button onClick={() => setActiveView("home")}>Home</button>
        <button onClick={() => setActiveView("searching")}>Searching</button>
        <button onClick={() => setActiveView("sorting")}>Sorting</button>
        <button onClick={() => setActiveView("about")}>About</button>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-start p-4 space-y-4 md:hidden">
          <button onClick={() => { setActiveView("home"); setIsOpen(false); }}>
            Home
          </button>
          <button onClick={() => { setActiveView("searching"); setIsOpen(false); }}>
            Searching
          </button>
          <button onClick={() => { setActiveView("sorting"); setIsOpen(false); }}>
            Sorting
          </button>
          <button onClick={() => { setActiveView("about"); setIsOpen(false); }}>
            About
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
