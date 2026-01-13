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
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input
        placeholder="Name"
        className="border p-2 w-full mb-2"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
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
        className="bg-green-500 text-white px-4 py-2 w-full"
      >
        Register
      </button>
    </div>
  );
}
