import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Customer from "./components/customer/Customer";
import LoginPage from "./components/Auth/LoginPage";
import SignUpPage from "./components/Auth/SignUpPage";
import { ToastContainer } from "react-toastify";

// Import other components if needed, e.g., Home, OtherComponent

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Other routes can be defined here, e.g., a home route */}
        <Route path="/" element={<Home />} />

        {/* Nested Admin routes */}

        <Route path="/Customer/*" element={<Customer />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
