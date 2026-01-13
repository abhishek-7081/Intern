// src/pages/PostGig.jsx
import { useState } from "react";
import api from "../api/axios";

export default function PostGig() {
  const [data, setData] = useState({ title: "", description: "", budget: "" });

  const submit = async () => {
    await api.post("/gigs", data);
    alert("Gig posted!");
  };

  return (
    <div className="p-5">
      <input placeholder="Title" className="border p-2 w-full"
        onChange={e => setData({ ...data, title: e.target.value })} />
      <textarea placeholder="Description" className="border p-2 w-full my-2"
        onChange={e => setData({ ...data, description: e.target.value })} />
      <input placeholder="Budget" className="border p-2 w-full"
        onChange={e => setData({ ...data, budget: e.target.value })} />
      <button onClick={submit} className="bg-blue-500 text-white p-2 mt-3">
        Post Gig
      </button>
    </div>
  );
}
