import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

export default function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    // Try hitting a protected endpoint
    api.get("/gigs")
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <p className="p-5">Checking authentication...</p>;
  if (!isAuth) return <Navigate to="/login" />;

  return children;
}
