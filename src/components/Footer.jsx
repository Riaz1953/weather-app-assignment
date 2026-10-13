"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-6 text-center text-slate-400 text-sm">
      <p>&copy; {year} OstadSky Weather App. All rights reserved.</p>
    </footer>
  );
}
