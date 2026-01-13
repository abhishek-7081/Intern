import { useState } from "react";
import api from "../api/axios";

export default function PostGig() {
  const [data, setData] = useState({ title: "", description: "", budget: "" });

  const submit = async () => {
    await api.post("/gigs", data);
    alert("🚀 Gig posted successfully!");
    setData({ title: "", description: "", budget: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-black 
                    flex items-center justify-center p-8 text-white">
      <div
        className="w-full max-w-md bg-white/5 backdrop-blur-xl 
                   border border-white/10 rounded-2xl shadow-2xl p-7"
      >
        {/* Header */}
        <h2 className="text-3xl font-extrabold tracking-widest text-cyan-300 mb-6 text-center">
          POST A GIG 🚀
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm tracking-wide">
          Launch your project into the GigFlow universe
        </p>

        {/* Title */}
        <div className="mb-5">
          <label className="text-xs uppercase tracking-widest text-cyan-200">
            Gig Title
          </label>
          <input
            value={data.title}
            placeholder="Enter gig title"
            className="mt-2 w-full rounded-xl bg-black/40 
                       border border-white/10 px-4 py-2.5
                       text-cyan-200 placeholder-gray-500
                       focus:ring-2 focus:ring-cyan-400 
                       focus:outline-none transition-all"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="text-xs uppercase tracking-widest text-cyan-200">
            Description
          </label>
          <textarea
            value={data.description}
            placeholder="Describe your gig mission..."
            rows={4}
            className="mt-2 w-full rounded-xl bg-black/40 
                       border border-white/10 px-4 py-2.5
                       text-cyan-200 placeholder-gray-500 resize-none
                       focus:ring-2 focus:ring-cyan-400 
                       focus:outline-none transition-all"
            onChange={(e) =>
              setData({ ...data, description: e.target.value })
            }
          />
        </div>

        {/* Budget */}
        <div className="mb-7">
          <label className="text-xs uppercase tracking-widest text-cyan-200">
            Budget (₹)
          </label>
          <input
            value={data.budget}
            type="number"
            placeholder="Set your launch budget"
            className="mt-2 w-full rounded-xl bg-black/40 
                       border border-white/10 px-4 py-2.5
                       text-cyan-200 placeholder-gray-500
                       focus:ring-2 focus:ring-cyan-400 
                       focus:outline-none transition-all"
            onChange={(e) => setData({ ...data, budget: e.target.value })}
          />
        </div>

        {/* Button */}
        <button
          onClick={submit}
          className="w-full py-3 rounded-full font-semibold tracking-widest
                     bg-gradient-to-r from-cyan-400 to-blue-500 text-black
                     hover:scale-105 hover:shadow-cyan-400/40
                     transition-all"
        >
          LAUNCH GIG
        </button>
      </div>
    </div>
  );
}
