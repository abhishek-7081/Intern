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

  const hire = async (bidId) => {
    await api.patch(`/bids/${bidId}/hire`);
    alert("Freelancer hired!");
    loadBids(selectedGig);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        GigFlow Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GIGS SECTION */}
        <div className="bg-white rounded-xl shadow-lg p-5">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4 border-b pb-2">
            Your Gigs
          </h2>

          <div className="space-y-3">
            {gigs.map(g => (
              <div
                key={g._id}
                onClick={() => loadBids(g._id)}
                className={`p-3 rounded-lg cursor-pointer transition-all duration-200 
                border 
                ${
                  selectedGig === g._id
                    ? "bg-indigo-600 text-white shadow-md scale-[1.02]"
                    : "bg-gray-50 hover:bg-indigo-50 hover:shadow"
                }`}
              >
                <p className="font-medium">{g.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BIDS SECTION */}
        <div className="bg-white rounded-xl shadow-lg p-5">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4 border-b pb-2">
            Bids
          </h2>

          {bids.length === 0 ? (
            <p className="text-gray-400 text-center mt-10">
              Select a gig to view bids 🚀
            </p>
          ) : (
            <div className="space-y-4">
              {bids.map(b => (
                <div
                  key={b._id}
                  className="border rounded-lg p-4 bg-gradient-to-r from-gray-50 to-white shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-indigo-700">
                      {b.freelancerId.name}
                    </p>
                    <span
                      className={`px-3 py-1 text-sm rounded-full 
                      ${
                        b.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-2">{b.message}</p>

                  <div className="flex justify-between items-center">
                    <p className="font-bold text-indigo-600">₹ {b.price}</p>

                    {b.status === "pending" && (
                      <button
                        onClick={() => hire(b._id)}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 
                        text-white px-4 py-1.5 rounded-lg 
                        hover:scale-105 transition-transform shadow"
                      >
                        Hire
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
