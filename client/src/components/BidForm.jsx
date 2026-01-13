import { useState } from "react";
import api from "../api/axios";

export default function BidForm({ gigId }) {
  const [bid, setBid] = useState({
    message: "",
    price: ""
  });

  const submit = async () => {
    try {
      await api.post("/bids", { ...bid, gigId });
      alert("Bid submitted successfully");
      setBid({ message: "", price: "" });
    } catch (err) {
      alert("You must be logged in to bid");
    }
  };

  return (
    <div className="mt-4 border p-4 rounded">
      <h3 className="font-bold mb-2">Place Your Bid</h3>

      <textarea
        placeholder="Message"
        className="border p-2 w-full mb-2"
        value={bid.message}
        onChange={(e) => setBid({ ...bid, message: e.target.value })}
      />

      <input
        type="number"
        placeholder="Price"
        className="border p-2 w-full mb-2"
        value={bid.price}
        onChange={(e) => setBid({ ...bid, price: e.target.value })}
      />

      <button
        onClick={submit}
        className="bg-green-500 text-white p-2 w-full"
      >
        Submit Bid
      </button>
    </div>
  );
}
