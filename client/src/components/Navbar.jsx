import React, { useState } from "react";

const Navbar = ({ setActiveView }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-50">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div
          className="text-2xl font-bold text-cyan-400 cursor-pointer"
          onClick={() => setActiveView("home")}
        >
          AlgoVisualizer
        </div>

        {/* Hamburger Button (Mobile only) */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => setActiveView("home")}>Home</button>
          <button onClick={() => setActiveView("searching")}>Searching</button>
          <button onClick={() => setActiveView("sorting")}>Sorting</button>
          <button onClick={() => setActiveView("about")}>About</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col mt-4 space-y-3 md:hidden">
          <button onClick={() => { setActiveView("home"); setOpen(false); }}>Home</button>
          <button onClick={() => { setActiveView("searching"); setOpen(false); }}>Searching</button>
          <button onClick={() => { setActiveView("sorting"); setOpen(false); }}>Sorting</button>
          <button onClick={() => { setActiveView("about"); setOpen(false); }}>About</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
