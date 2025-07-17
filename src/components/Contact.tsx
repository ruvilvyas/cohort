"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    // You can add API call here later
    // Example: await fetch('/api/contact', {...})
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#fdf4f9] text-[#2d1b4e] py-16 px-6">
      <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg border border-[#d9c7f2] focus:outline-none focus:ring-2 focus:ring-[#c5a4f5]"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg border border-[#d9c7f2] focus:outline-none focus:ring-2 focus:ring-[#c5a4f5]"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="p-4 rounded-lg border border-[#d9c7f2] h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#c5a4f5]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#6b3fa0] text-white py-3 rounded-lg hover:bg-[#583187] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
