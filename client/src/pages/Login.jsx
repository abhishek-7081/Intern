// src/pages/Login.jsx
import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await api.post("/auth/login", data);
      alert("🎉 Login successful");
      navigate("/");
    } catch (err) {
      alert("❌ Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-sky-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-2">
          Welcome
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to continue to GigFlow
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 
                       focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 
                       focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        {/* Button */}
        <button
          onClick={submit}
          className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 
                     text-white py-2.5 rounded-lg font-semibold
                     hover:scale-[1.02] hover:shadow-lg transition-all"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
