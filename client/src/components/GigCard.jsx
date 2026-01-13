// src/components/GigCard.jsx
import { Link } from "react-router-dom";

export default function GigCard({ gig }) {
  return (
    <div className="border p-4 mb-3 rounded">
      <h2 className="font-bold">{gig.title}</h2>
      <p>{gig.description}</p>
      <p className="text-green-600">₹{gig.budget}</p>
      <Link to={`/gig/${gig._id}`} className="text-blue-500">
        View & Bid
      </Link>
    </div>
  );
}
