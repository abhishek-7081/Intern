

import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://intern-75f8.onrender.com/api",
  withCredentials: true
});
