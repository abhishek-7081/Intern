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
      alert("Login successful");
      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        placeholder="Email"
        className="border p-2 w-full mb-2"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-2"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button
        onClick={submit}
        className="bg-blue-500 text-white px-4 py-2 w-full"
      >
        Login
      </button>
    </div>
  );
}
