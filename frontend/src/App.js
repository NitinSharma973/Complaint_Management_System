import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ComplaintForm from "./components/ComplaintForm";
import ComplaintTable from "./components/ComplaintTable";
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="header text-center">
          <h1>Complaint Management System</h1>
        </header>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/" className="btn btn-primary mx-2">
            Submit Complaint
          </Link>
          <Link to="/admin" className="btn btn-secondary mx-2">
            Admin Dashboard
          </Link>
        </nav>

        {/* Main content (Routes for Complaint Form and Complaint Table) */}
        <main className="main-content">
          <Routes>
            {/* Route for Complaint Form */}
            <Route path="/" element={<ComplaintForm />} />

            {/* Route for Complaint Table (Admin Dashboard) */}
            <Route path="/admin" element={<ComplaintTable />} />
          </Routes>
        </main>

        {/* Footer (Optional, can be used for any additional info) */}
        <footer className="footer text-center">
          <p>&copy; 2025 Complaint Management System</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
