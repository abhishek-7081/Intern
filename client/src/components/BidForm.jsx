// src/components/BidForm.jsx
import { useState } from "react";
import api from "../api/axios";

export default function BidForm({ gigId }) {
  const [bid, setBid] = useState({ message: "", price: "" });

  const submit = async () => {
    await api.post("/bids", { ...bid, gigId });
    alert("Bid submitted!");
  };

  return (
    <div>
      <textarea placeholder="Message"
        onChange={e => setBid({ ...bid, message: e.target.value })}
        className="border p-2 w-full" />
      <input placeholder="Price"
        onChange={e => setBid({ ...bid, price: e.target.value })}
        className="border p-2 w-full my-2" />
      <button onClick={submit} className="bg-green-500 text-white p-2">
        Submit Bid
      </button>
    </div>
  );
}