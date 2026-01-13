// src/components/GigCard.jsx
import { Link } from "react-router-dom";

export default function GigCard({ gig }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md border border-gray-100 
                 p-5 flex flex-col justify-between h-full
                 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-indigo-700 mb-2 line-clamp-1">
        {gig.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {gig.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        <p className="text-lg font-semibold text-green-600">
          ₹ {gig.budget}
        </p>

        <Link
          to={`/gig/${gig._id}`}
          className="bg-linear-to-r from-indigo-600 to-blue-600 
                     text-white px-4 py-1.5 rounded-lg text-sm font-medium
                     shadow hover:scale-105 transition-transform"
        >
          View & Bid
        </Link>
      </div>
    </div>
  );
}
