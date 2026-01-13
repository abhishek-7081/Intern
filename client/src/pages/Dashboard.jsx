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
    <div className="p-5 grid grid-cols-2 gap-4">
      <div>
        <h2 className="font-bold mb-2">Your Gigs</h2>
        {gigs.map(g => (
          <div key={g._id}
            className="border p-2 cursor-pointer"
            onClick={() => loadBids(g._id)}>
            {g.title}
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-bold mb-2">Bids</h2>
        {bids.map(b => (
          <div key={b._id} className="border p-2 mb-2">
            <p><b>{b.freelancerId.name}</b></p>
            <p>{b.message}</p>
            <p>₹{b.price}</p>
            <p>Status: {b.status}</p>
            {b.status === "pending" && (
              <button
                className="bg-green-500 text-white px-3 py-1"
                onClick={() => hire(b._id)}>
                Hire
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
