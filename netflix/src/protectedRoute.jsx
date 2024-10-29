import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { Navigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Keeps track of the current route

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) {
    // Redirect to login if not authenticated, preserving the original path
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, allow access to the protected content
  return children;
};

export default ProtectedRoute;
