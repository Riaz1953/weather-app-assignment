import {
  FaCloudSun,
  FaChartLine,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      icon: <FaCloudSun className="text-sky-400 text-3xl" />,
      title: "Real-time Weather Forecasts",
      desc: "Get instant live updates on temperature, humidity, and wind conditions for multiple cities.",
    },
    {
      icon: <FaChartLine className="text-amber-400 text-3xl" />,
      title: "Accurate Data Analytics",
      desc: "Powered by Open-Meteo API to ensure precise, high-performance meteorological reporting.",
    },
    {
      icon: <FaMobileAlt className="text-teal-400 text-3xl" />,
      title: "Responsive Design",
      desc: "Optimized smoothly across mobile, tablet, and desktop screens using Tailwind CSS.",
    },
    {
      icon: <FaShieldAlt className="text-indigo-400 text-3xl" />,
      title: "Reliable & Fast",
      desc: "Built on Next.js server components and client hooks for lightning-fast rendering speed.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-sky-400 mb-2 text-center">
        Our Services
      </h1>
      <p className="text-slate-400 text-center mb-12">
        Discover what our weather portal offers
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl shadow-lg"
          >
            <div className="mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
            <p className="text-slate-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
