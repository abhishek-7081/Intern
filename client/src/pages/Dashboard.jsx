import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Dashboard() {
  const [gigs, setGigs] = useState([]);
  const [selectedGig, setSelectedGig] = useState(null);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    api.get("/gigs").then(res => setGigs(res.data));
  }, []);

  const loadBids = async (gigId) => {
    setSelectedGig(gigId);
    const res = await api.get(`/bids/${gigId}`);
    setBids(res.data);
  };

  const hireFreelancer = async (bidId) => {
    try {
      const res = await api.patch(`/bids/${bidId}/hire`);
      alert(res.data);
      loadBids(selectedGig);
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data || "Hiring failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white p-8">
      <h1 className="text-3xl font-extrabold tracking-widest text-center mb-10 text-cyan-300">
        DASHBOARD ✨
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Gigs */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
          <h2 className="text-xl font-bold tracking-wider text-cyan-200 mb-5">
            YOUR GIGS
          </h2>

          <div className="space-y-3">
            {gigs.map(g => (
              <div
                key={g._id}
                onClick={() => loadBids(g._id)}
                className={`p-3 rounded-xl cursor-pointer transition-all duration-300
                ${
                  selectedGig === g._id
                    ? "bg-cyan-500/20 border border-cyan-400 shadow-lg scale-[1.02]"
                    : "bg-white/5 hover:bg-cyan-500/10 border border-white/10"
                }`}
              >
                <p className="font-medium tracking-wide">{g.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Bids */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
          <h2 className="text-xl font-bold tracking-wider text-cyan-200 mb-5">
            BIDS RECEIVED
          </h2>

          {bids.length === 0 ? (
            <p className="text-gray-400 text-center mt-10">
              Select a gig to see bids 🚀
            </p>
          ) : (
            <div className="space-y-4">
              {bids.map(b => (
                <div
                  key={b._id}
                  className="bg-gradient-to-r from-white/5 to-white/10 
                             border border-white/10 rounded-xl p-4 
                             hover:shadow-cyan-500/20 hover:shadow-xl transition-all"
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-cyan-300 tracking-wide">
                      {b.freelancerId.name}
                    </p>
                    <span
                      className={`px-3 py-1 text-xs rounded-full tracking-wider
                      ${
                        b.status === "pending"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-green-500/20 text-green-300"
                      }`}
                    >
                      {b.status.toUpperCase()}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-2">{b.message}</p>

                  <div className="flex justify-between items-center">
                    <p className="font-bold text-cyan-400">
                      ₹ {b.price}
                    </p>

                    {b.status === "pending" && (
                      <button
                        onClick={() => hireFreelancer(b._id)}
                        className="px-5 py-1.5 rounded-full 
                                   bg-gradient-to-r from-cyan-400 to-blue-500
                                   text-black font-semibold text-sm
                                   hover:scale-105 hover:shadow-cyan-400/40
                                   transition-all"
                      >
                        HIRE
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
