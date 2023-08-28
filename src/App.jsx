import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./UserContext";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Auth/Login";
import User from "./Components/User/User";

import "./App.css";
import ProtectedRoute from "./Components/Helpers/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
