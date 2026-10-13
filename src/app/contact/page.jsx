"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-sky-400 mb-2 text-center">
        Contact Us
      </h1>
      <p className="text-slate-400 text-center mb-8">
        We would love to hear your feedback!
      </p>

      {submitted ? (
        <div className="bg-emerald-500/10 border border-emerald-500 text-emerald-400 p-6 rounded-2xl text-center">
          Thank you for reaching out! We will get back to you soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/60 border border-slate-700 p-8 rounded-3xl shadow-xl space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-sky-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-sky-500"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-sky-500"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl transition shadow-lg"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
