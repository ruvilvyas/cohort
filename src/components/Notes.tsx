"use client";

import { useState } from "react";

export default function NotesPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const subjects = [
    "Gujarati",
    "Accountancy",
    "Business & Administration",
    "Economics",
    "SP & CC",
    "Computer",
    "English",
  ];

  const notesData: Record<string, Record<string, { chapter: string; file: string }[]>> = {
    gujarati: {
      "11": [
        { chapter: "Chapter 1: Sahitya Sankalan", file: "/notes/gujarati-11-ch1.pdf" },
        { chapter: "Chapter 2: Nibandh", file: "/notes/gujarati-11-ch2.pdf" },
      ],
      "12": [
        { chapter: "Chapter 1: Kavita Sangrah", file: "/notes/gujarati-12-ch1.pdf" },
        { chapter: "Chapter 2: Patra Lekhan", file: "/notes/gujarati-12-ch2.pdf" },
      ],
    },
    economics: {
      "11": [
        { chapter: "Chapter 1: Demand & Supply", file: "/notes/economics-11-ch1.pdf" },
        { chapter: "Chapter 2: National Income", file: "/notes/economics-11-ch2.pdf" },
      ],
      "12": [
        { chapter: "Chapter 1: Macro Policies", file: "/notes/economics-12-ch1.pdf" },
        { chapter: "Chapter 2: Banking System", file: "/notes/economics-12-ch2.pdf" },
      ],
    },
    // Add more subjects if needed
  };

  const resetAll = () => {
    setSelectedSubject(null);
    setSelectedClass(null);
  };

  const formatSubjectName = (subject: string | null) =>
    subject ? subject.replace(/-/g, " ") : "";

  return (
    <section className="bg-[#fdf4f9] min-h-screen py-16 px-6 text-[#2d1b4e]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">📚 Notes Section</h2>

        {/* Step 1: Subject Selection */}
        {!selectedSubject && (
          <>
            <p className="text-[#6b3fa0] font-medium mb-10">
              Select a subject to continue
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
              {subjects.map((subject, i) => (
                <div
                  key={i}
                  onClick={() =>
                    setSelectedSubject(subject.toLowerCase().replace(/ &| /g, "-"))
                  }
                  className="bg-white border border-[#eccdf1] p-6 rounded-xl shadow hover:shadow-md transition duration-300 cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-[#6b3fa0]">{subject}</h3>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Step 2: Class Selection */}
        {selectedSubject && !selectedClass && (
          <>
            <p className="text-[#4b3c5a] mb-10">
              Select class for{" "}
              <strong className="capitalize">{formatSubjectName(selectedSubject)}</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {["11", "12"].map((cls) => (
                <div
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className="bg-white border border-[#e0bdf0] p-6 rounded-xl shadow hover:shadow-lg cursor-pointer w-40"
                >
                  <h3 className="text-xl font-semibold text-[#512a85]">Class {cls}</h3>
                </div>
              ))}
            </div>
            <button onClick={resetAll} className="mt-8 text-sm text-blue-700 underline">
              🔙 Back to Subjects
            </button>
          </>
        )}

        {/* Step 3: Chapter Notes */}
        {selectedSubject && selectedClass && (
          <>
            <p className="text-[#4b3c5a] mb-6">
              Chapters for{" "}
              <strong className="capitalize">{formatSubjectName(selectedSubject)}</strong> - Class{" "}
              <strong>{selectedClass}</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {(notesData[selectedSubject]?.[selectedClass] || []).map((note, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow border hover:shadow-lg text-left"
                >
                  <h4 className="font-bold mb-2">{note.chapter}</h4>
                  <a
                    href={note.file}
                    target="_blank"
                    className="text-[#6b3fa0] text-sm underline"
                    rel="noopener noreferrer"
                  >
                    View / Download
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 space-x-4">
              <button
                onClick={() => setSelectedClass(null)}
                className="text-sm text-purple-700 underline"
              >
                🔙 Back to Class
              </button>
              <button
                onClick={resetAll}
                className="text-sm text-blue-700 underline"
              >
                🏠 Back to Subjects
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
