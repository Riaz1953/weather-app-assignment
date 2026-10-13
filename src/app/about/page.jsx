export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-sky-400 mb-6">About Our App</h1>
      <p className="text-slate-300 leading-relaxed mb-4">
        SkyPulse is a modern weather application built using Next.js App Router
        and Tailwind CSS. It provides real-time meteorological data including
        accurate temperature readings, moisture levels, and wind velocities
        sourced directly from open-source APIs.
      </p>
      <p className="text-slate-300 leading-relaxed">
        Our mission is to deliver fast, clean, and reliable weather updates with
        an intuitive user interface.
      </p>
    </div>
  );
}
