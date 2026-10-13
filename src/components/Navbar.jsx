import Link from "next/link";
import {
  FaCloudSun,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-800/80 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 text-sky-400 font-bold text-xl"
          >
            <FaCloudSun className="text-3xl" />
            <span>OstadSky</span>
          </Link>
          <div className="flex space-x-6">
            <Link
              href="/"
              className="flex items-center space-x-1 hover:text-sky-400 transition"
            >
              <FaHome /> <span>Home</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center space-x-1 hover:text-sky-400 transition"
            >
              <FaInfoCircle /> <span>About</span>
            </Link>
            <Link
              href="/services"
              className="flex items-center space-x-1 hover:text-sky-400 transition"
            >
              <FaServicestack /> <span>Services</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-1 hover:text-sky-400 transition"
            >
              <FaEnvelope /> <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
