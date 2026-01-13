import { useState } from "react";
import api from "../api/axios";

export default function PostGig() {
  const [data, setData] = useState({ title: "", description: "", budget: "" });

  const submit = async () => {
    await api.post("/gigs", data);
    alert("🎉 Gig posted successfully!");
    setData({ title: "", description: "", budget: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-sky-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Post a New Gig 🚀
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Gig Title</label>
          <input
            value={data.title}
            placeholder="Enter gig title"
            className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 
                       focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            value={data.description}
            placeholder="Describe your gig requirements..."
            rows={4}
            className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 
                       focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none"
            onChange={(e) =>
              setData({ ...data, description: e.target.value })
            }
          />
        </div>

        {/* Budget */}
        <div className="mb-5">
          <label className="text-sm font-medium text-gray-600">
            Budget (₹)
          </label>
          <input
            value={data.budget}
            type="number"
            placeholder="Enter your budget"
            className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 
                       focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            onChange={(e) => setData({ ...data, budget: e.target.value })}
          />
        </div>

        {/* Button */}
        <button
          onClick={submit}
          className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 
                     text-white py-2.5 rounded-lg font-semibold
                     hover:scale-[1.02] hover:shadow-lg transition-all"
        >
          Post Gig
        </button>
      </div>
    </div>
  );
}
