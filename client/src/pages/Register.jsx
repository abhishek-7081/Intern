// src/pages/Register.jsx
import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await api.post("/auth/register", data);
      alert("🚀 Registration successful");
      navigate("/login");
    } catch (err) {
      alert("❌ Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-black 
                    flex items-center justify-center p-8 text-white">
      <div
        className="w-full max-w-md bg-white/5 backdrop-blur-xl 
                   border border-white/10 rounded-2xl shadow-2xl p-8"
      >
        {/* Header */}
        <h2 className="text-3xl font-extrabold tracking-widest text-cyan-300 mb-2 text-center">
          CREATE ACCOUNT ✨
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm tracking-wide">
          Join GigFlow and begin your mission
        </p>

        {/* Name */}
        <div className="mb-5">
          <label className="text-xs uppercase tracking-widest text-cyan-200">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="mt-2 w-full rounded-xl bg-black/40 
                       border border-white/10 px-4 py-2.5
                       text-cyan-200 placeholder-gray-500
                       focus:ring-2 focus:ring-cyan-400 
                       focus:outline-none transition-all"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="text-xs uppercase tracking-widest text-cyan-200">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your space ID"
            className="mt-2 w-full rounded-xl bg-black/40 
                       border border-white/10 px-4 py-2.5
                       text-cyan-200 placeholder-gray-500
                       focus:ring-2 focus:ring-cyan-400 
                       focus:outline-none transition-all"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        {/* Password */}
        <div className="mb-7">
          <label className="text-xs uppercase tracking-widest text-cyan-200">
            Password
          </label>
          <input
            type="password"
            placeholder="Create your access key"
            className="mt-2 w-full rounded-xl bg-black/40 
                       border border-white/10 px-4 py-2.5
                       text-cyan-200 placeholder-gray-500
                       focus:ring-2 focus:ring-cyan-400 
                       focus:outline-none transition-all"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        {/* Button */}
        <button
          onClick={submit}
          className="w-full py-3 rounded-full font-semibold tracking-widest
                     bg-gradient-to-r from-cyan-400 to-blue-500 text-black
                     hover:scale-105 hover:shadow-cyan-400/40
                     transition-all"
        >
          CREATE ACCOUNT
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already onboard?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-cyan-300 font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
