import { Navigate } from "react-router";

export default function ProtectRoutes({ children }) {
  // const token = localStorage.getItem("token");

  // if (!token) return <Navigate to="/login" replace />;

  return children;
}
