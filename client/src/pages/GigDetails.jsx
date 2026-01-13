import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import BidForm from "../components/BidForm";

export default function GigDetails() {
  const { id } = useParams();
  const [gig, setGig] = useState(null);

  useEffect(() => {
    api.get(`/gigs?search=`).then(res => {
      const found = res.data.find(g => g._id === id);
      setGig(found);
    });
  }, [id]);

  if (!gig)
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#020617] to-[#0f172a] 
                      text-cyan-300 flex items-center justify-center">
        <p className="text-lg tracking-widest animate-pulse">
          Loading Gig Data...
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        {/* Gig Card */}
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10 
                     rounded-2xl p-6 shadow-2xl mb-8"
        >
          <h2 className="text-3xl font-extrabold tracking-widest text-cyan-300 mb-3">
            {gig.title}
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            {gig.description}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-cyan-400">
              ₹ {gig.budget}
            </p>

            <span className="px-4 py-1 rounded-full text-xs tracking-widest 
                             bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              OPEN FOR BIDS
            </span>
          </div>
        </div>

        {/* Bid Section */}
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10 
                     rounded-2xl p-6 shadow-2xl"
        >
          <h3 className="text-xl font-bold tracking-wider text-cyan-200 mb-4">
            PLACE YOUR BID 🚀
          </h3>

          <div className="bg-black/30 p-4 rounded-xl border border-white/10">
            <BidForm gigId={gig._id} />
          </div>
        </div>
      </div>
    </div>
  );
}
