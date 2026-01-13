// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="font-bold">GigFlow</h1>
      <div className="space-x-4">
        <Link to="/">Gigs</Link>
        <Link to="/post">Post Gig</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
