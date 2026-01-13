// src/pages/Home.jsx
import { useEffect, useState } from "react";
import api from "../api/axios";
import GigCard from "../components/GigCard";

export default function Home() {
  const [gigs, setGigs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get(`/gigs?search=${search}`).then(res => setGigs(res.data));
  }, [search]);

  return (
    <div className="p-5">
      <input
        placeholder="Search gigs..."
        className="border p-2 w-full mb-4"
        onChange={e => setSearch(e.target.value)}
      />
      {gigs.map(gig => <GigCard key={gig._id} gig={gig} />)}
    </div>
  );
}
