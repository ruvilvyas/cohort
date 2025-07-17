"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#fdf4f9] text-[#2d1b4e] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#6b3fa0]">
Sansole Education
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/tutorials">Tutorials</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link
            href="/enroll"
            className="bg-[#6b3fa0] text-white px-4 py-2 rounded-full hover:bg-[#583187] transition"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/tutorials">Tutorials</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link
            href="/enroll"
            className="bg-[#6b3fa0] text-white px-4 py-2 rounded-full text-center"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
}
