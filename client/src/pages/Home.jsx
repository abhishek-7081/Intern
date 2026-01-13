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
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-black text-white p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-extrabold tracking-widest text-cyan-300 mb-10 text-center">
          EXPLORE GIGS ✨
        </h1>

        {/* Search Bar */}
        <div className="mb-10">
          <input
            placeholder="🔍 Search gigs by title, skills, or budget..."
            className="w-full rounded-2xl bg-white/5 backdrop-blur-xl
                       border border-white/10 px-5 py-3
                       text-cyan-200 placeholder-gray-400
                       focus:ring-2 focus:ring-cyan-400 
                       focus:outline-none transition-all"
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Gigs Grid */}
        {gigs.length === 0 ? (
          <div className="text-center text-gray-400 mt-20">
            <p className="text-lg tracking-widest">NO GIGS FOUND 🚫</p>
            <p className="text-sm mt-1">Try different keywords</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gigs.map(gig => (
              <div
                key={gig._id}
                className="transform transition-all duration-300 
                           hover:scale-[1.03] hover:shadow-cyan-500/30 
                           hover:shadow-2xl"
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
