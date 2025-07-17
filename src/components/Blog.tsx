"use client";

import { useState } from "react";

export default function Blog() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const teacherBlog = [
    {
      title: "Class 11 Commerce - Concept Clarity",
      desc: "Khushi Shah ma'am simplifies Accounts, Business Studies, Economics, and other Class 11 subjects as per syllabus, focusing on real-life case studies and practical clarity.",
      img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
      category: "Class 11 - Commerce (All Subjects)",
    },
    {
      title: "Class 12 Commerce - Exam Excellence",
      desc: "CA Ankit Patel sir helps students master the full Class 12 syllabus including Accounts, Economics, BST, and Statistics with proven techniques and regular tests and extraa class also.",
      img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      category: "Class 12 - Commerce (All Subjects)",
    },
  ];

  return (
    <section className="bg-[#fdf4f9] text-[#2d1b4e] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Educator's Corner
        </h2>

        <p className="text-md text-[#6b3fa0] font-medium mb-4">
          All our teachers and faculty are experts with 20+ years of experience in the coaching field — and they teach all subjects covered in the syllabus.
        </p>

        <p className="text-lg text-[#4b3c5a] mb-12 max-w-2xl mx-auto">
          Get to know the experts behind your success — experienced, engaging,
          and fully dedicated to your academic growth from foundation to excellence.
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          {teacherBlog.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center animate-updown"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hanging string */}
              <div className="w-1 h-6 bg-gray-400 rounded-full mb-[-8px]"></div>
              <div className="w-[2px] h-6 bg-gray-400 absolute top-[-24px]"></div>

              {/* Card */}
              <div
                className={`w-[300px] bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ${
                  hoveredIndex === index
                    ? "scale-105 z-10"
                    : hoveredIndex === null
                    ? "scale-100"
                    : "scale-95 opacity-80"
                }`}
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-5 text-left">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4b3c5a] mb-2">{item.desc}</p>
                  <span className="text-xs text-[#6b3fa0] font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Up-down animation */}
      <style jsx>{`
        @keyframes updown {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-updown {
          animation: updown 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
