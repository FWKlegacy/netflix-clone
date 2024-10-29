import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import ProtectedRoute from "./protectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/player/:id"
          element={
            <ProtectedRoute>
              <Player />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
