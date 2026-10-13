"use client";
import { useState, useEffect } from "react";
import {
  FaSearch,
  FaTemperatureHigh,
  FaWind,
  FaTint,
  FaClock,
} from "react-icons/fa";

export default function Home() {
  const [city, setCity] = useState("Dhaka");
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const presetLocations = {
    Dhaka: { lat: 23.8103, lon: 90.4125 },
    Chittagong: { lat: 22.3569, lon: 91.7832 },
    Sylhet: { lat: 24.8949, lon: 91.8687 },
    London: { lat: 51.5074, lon: -0.1278 },
    NewYork: { lat: 40.7128, lon: -74.006 },
  };

  const fetchWeather = async (lat, lon) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`,
      );
      const data = await res.json();
      setWeatherData(data.current);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Search by city name using Open-Meteo Geocoding API
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;

    setLoading(true);
    setError("");
    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchInput)}&count=1&language=en&format=json`,
      );
      const geoData = await geoRes.json();

      if (geoData.results && geoData.results.length > 0) {
        const place = geoData.results[0];
        const cityName = `${place.name}${place.country ? `, ${place.country}` : ""}`;
        setCity(cityName);
        await fetchWeather(place.latitude, place.longitude);
        setSearchInput("");
      } else {
        setError(
          `Location "${searchInput}" not found. Please try another name.`,
        );
        setLoading(false);
      }
    } catch (err) {
      setError("Error searching for location.");
      setLoading(false);
    }
  };

  useEffect(() => {
    const loc = presetLocations["Dhaka"];
    fetchWeather(loc.lat, loc.lon);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">
          Live Weather Forecast
        </h1>
        <p className="text-slate-400">
          Check current temperature, humidity, and wind speed
        </p>
      </div>

      {/* Preset Buttons & Search Bar Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Preset City Buttons */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {Object.keys(presetLocations).map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setCity(loc);
                fetchWeather(
                  presetLocations[loc].lat,
                  presetLocations[loc].lon,
                );
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition shadow-md ${
                city === loc
                  ? "bg-sky-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Custom Search Form */}
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 w-full md:w-auto"
        >
          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search any city..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 pl-10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 transition"
            />
            <FaSearch className="absolute left-3 top-3 text-slate-400 text-xs" />
          </div>
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition shadow-md whitespace-nowrap"
          >
            Search
          </button>
        </form>
      </div>

      {/* Weather Card */}
      <div className="bg-slate-800/60 border border-slate-700 backdrop-blur-md rounded-3xl p-8 shadow-2xl text-center relative overflow-hidden">
        {loading ? (
          <div className="py-20 text-sky-400 animate-pulse text-lg">
            Loading weather data...
          </div>
        ) : error ? (
          <div className="py-20 text-red-400 font-medium">{error}</div>
        ) : weatherData ? (
          <div>
            <h2 className="text-2xl font-bold text-sky-300 mb-6">{city}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-slate-700/50 p-6 rounded-2xl flex flex-col items-center">
                <FaTemperatureHigh className="text-4xl text-amber-400 mb-3" />
                <span className="text-slate-400 text-sm">Temperature</span>
                <span className="text-3xl font-bold text-white mt-1">
                  {weatherData.temperature_2m}°C
                </span>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-2xl flex flex-col items-center">
                <FaTint className="text-4xl text-sky-400 mb-3" />
                <span className="text-slate-400 text-sm">Humidity</span>
                <span className="text-3xl font-bold text-white mt-1">
                  {weatherData.relative_humidity_2m}%
                </span>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-2xl flex flex-col items-center">
                <FaWind className="text-4xl text-teal-400 mb-3" />
                <span className="text-slate-400 text-sm">Wind Speed</span>
                <span className="text-3xl font-bold text-white mt-1">
                  {weatherData.wind_speed_10m} km/h
                </span>
              </div>
            </div>

            <div className="mt-8  text-sky-400 text-xs flex items-center justify-center gap-2">
              <FaClock /> Last updated:{" "}
              {new Date(weatherData.time).toLocaleString()}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
