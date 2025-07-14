"use client";

export default function CohortFeatures() {
  return (
    <section className="bg-[#fdf4f9] text-[#2d1b4e] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Learn Smarter with Real-World Practice
        </h2>
        <p className="text-lg text-[#4b3c5a] mb-12 max-w-2xl mx-auto">
          At Glaemira, you don&apos;t just attend classes — you engage in practical,
          mentor-led learning designed to prepare you for real success. Whether you&apos;re a beginner or brushing up skills, we&apos;ve got the perfect path for you.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "class 11",
              desc: "Commerce 11th.",
              img: "/class11.jpg",
            },
            {
              title: "class 12",
              desc: "Commerce 11th.",
              img: "/class12.png",
            },
            {
              title: "Spoken English",
              desc: "Crack interviews with our structured sessions approach.",
              img: "/english.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#4b3c5a]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <h3 className="text-2xl font-bold mb-4">
          Empowering Learners to Achieve More!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-[#6b3fa0]">Rank1</p>
            <p className="text-sm text-[#4b3c5a] mt-2">toppers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#6b3fa0]">1,000+</p>
            <p className="text-sm text-[#4b3c5a] mt-2">students trained</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#6b3fa0]">4.9 / 5</p>
            <p className="text-sm text-[#4b3c5a] mt-2">average rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
