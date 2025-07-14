"use client";

import { Typewriter } from "react-simple-typewriter";
/** Empower Your Learning Journey */
export default function CohortHero() {
  return (
    <section className="bg-gradient-to-br from-[#fdf4f9] to-[#f2e8ff] min-h-[90vh] flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <p className="inline-block px-4 py-2 bg-[#e8d9f2] text-[#6b3fa0] text-sm font-medium rounded-full mb-6">
          Learn with Confidence
          
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2d1b4e] mb-4">
          Welcome to Cohort
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#5a3b7e] mb-6">
          <Typewriter
            words={["Master Skills", "Build career", "Join Our Community"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-[#4b3c5a] mb-8">
          Confused about where to start? We&apos;ve got you covered! Our guided cohort
          program will help you learn industry-relevant skills step by step — with
          mentorship, real-world projects, and community support.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-[#6b3fa0] text-white rounded-full hover:bg-[#583187] transition">
            Explore Classes
          </button>
          <button className="px-6 py-3 bg-white border border-[#6b3fa0] text-[#6b3fa0] rounded-full hover:bg-[#f1e6ff] transition">
            Learn articles
          </button>
        </div>
        <br />
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md min-w-[120px]">
            <p className="text-2xl font-bold text-[#6b3fa0]">20+</p>
            <p className="text-sm text-[#4b3c5a]">Courses</p>
          </div>
          <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md min-w-[120px]">
            <p className="text-2xl font-bold text-[#6b3fa0]">1,000+</p>
            <p className="text-sm text-[#4b3c5a]">Students</p>
          </div>
          <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md min-w-[120px]">
            <p className="text-2xl font-bold text-[#6b3fa0]">5.0</p>
            <p className="text-sm text-[#4b3c5a]">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
