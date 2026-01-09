import React from "react";
import { useAuth } from "../../context/AuthContext";
import AuthPage from "./AuthPage";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div className="text-center mt-20 text-white">Loading...</div>;

  if (!user) return <AuthPage />; // show login if not logged in

  return children; // show app if logged in
};

export default ProtectedRoute;
