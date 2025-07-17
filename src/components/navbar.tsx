"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#fdf4f9] text-[#2d1b4e] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-[#6b3fa0]">
          Sansole Education
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <a href="#home">Home</a>
          <a href="#tutorial">Tutorials</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a
            href="#enroll"
            className="bg-[#6b3fa0] text-white px-4 py-2 rounded-full hover:bg-[#583187] transition"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium">
          <a href="#home">Home</a>
          <a href="#tutorial">Tutorials</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a
            href="#enroll"
            className="bg-[#6b3fa0] text-white px-4 py-2 rounded-full text-center"
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}

