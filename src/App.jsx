import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/register";
import Sidebar from "./components/AdminDashboard/Sidebar"; 
import "./styles/Global.css";
import "./index.css";

// Importing Admin Dashboard Components
import GatepassesToday from "./components/AdminDashboard/GatepassesToday";
import Entries from "./components/AdminDashboard/Entries";
import Exits from "./components/AdminDashboard/Exits";
import GatepassHistory from "./components/AdminDashboard/GatepassHistory";
import Locations from "./components/AdminDashboard/Locations";
import LocationPage from "./components/AdminDashboard/LocationPage";
import Purposes from "./components/AdminDashboard/Purposes";
import PurposePage from "./components/AdminDashboard/PurposePage";

import Sidebarr from './components/EmployeeDashboard/Sidebarr';
import Header from './components/EmployeeDashboard/Header';
import Dashboard from './components/EmployeeDashboard/Dashboard';
import Trips from './components/EmployeeDashboard/Trips';
import Expenses from './components/EmployeeDashboard/Expenses';
import Notifications from './components/EmployeeDashboard/Notifications';
import Profile from './components/EmployeeDashboard/Profile';

import Sidebarrr from './components/ManagerDashboard/Sidebarrr';
import { AuthProvider } from './components/ManagerDashboard/AuthContext';
import ManDash from './components/ManagerDashboard/ManDash';
import Expense from './components/ManagerDashboard/Expense';
import Notification from './components/ManagerDashboard/Notification';
import Profilee from './components/ManagerDashboard/Profilee';
import Trip from './components/ManagerDashboard/Trip';

const App = () => {
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || "");
  const [activeView, setActiveView] = useState('Dashboard');

  useEffect(() => {
    // Listen for changes in localStorage
    const handleStorageChange = () => {
      setUserRole(localStorage.getItem("userRole") || "");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const isAdmin = userRole === "admin";

  return (
    <Router>
      <div className="app-container">
      <div className="app-container">
      
      
    </div>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Dashboard Routes */}
          <Route path="/sidebar" element={isAdmin ? <Sidebar /> : <Navigate to="/login" />} />
          <Route path="/gatepassestoday" element={isAdmin ? <GatepassesToday /> : <Navigate to="/login" />} />
          <Route path="/entries" element={isAdmin ? <Entries /> : <Navigate to="/login" />} />
          <Route path="/exits" element={isAdmin ? <Exits /> : <Navigate to="/login" />} />
          <Route path="/gatepasshistory" element={isAdmin ? <GatepassHistory /> : <Navigate to="/login" />} />
          <Route path="/locations" element={isAdmin ? <Locations /> : <Navigate to="/login" />} />
          <Route path="/locations/:location" element={isAdmin ? <LocationPage /> : <Navigate to="/login" />} />
          <Route path="/purposes" element={isAdmin ? <Purposes /> : <Navigate to="/login" />} />
          <Route path="/purpose/:purpose" element={isAdmin ? <PurposePage /> : <Navigate to="/login" />} />
        </Routes>
        
        <div className="appapp">
        <Routes>
          
          <Route path="/employee-dash" element={<Dashboard />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          
          </Routes>
        
      </div>
      </div>
      <AuthProvider>
        <div className="app">
        
        <main className="main-content">
          <Routes>
            <Route path="/dashman" element={<ManDash />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profilee" element={<Profilee />} />
            <Route path="/trip" element={<Trip />} />
          </Routes>
        </main>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
