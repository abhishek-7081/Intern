// src/pages/Home.jsx
import { useEffect, useState } from "react";
import api from "../api/axios";
import GigCard from "../components/GigCard";

export default function Home() {
  const [gigs, setGigs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get(`/gigs?search=${search}`).then(res => setGigs(res.data));
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Explore Gigs 💼
        </h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            placeholder="🔍 Search gigs by title, skills, or budget..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 
                       shadow-sm focus:ring-2 focus:ring-indigo-400 
                       focus:outline-none transition-all"
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Gigs Grid */}
        {gigs.length === 0 ? (
          <div className="text-center text-gray-400 mt-16">
            <p className="text-lg">No gigs found 😕</p>
            <p className="text-sm">Try searching with different keywords</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gigs.map(gig => (
              <div
                key={gig._id}
                className="transform transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <GigCard gig={gig} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
