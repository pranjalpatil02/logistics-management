import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebarrr = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Add your logout logic here
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="user-profile">
        <img src="https://via.placeholder.com/50" alt="User avatar" className="avatar" />
        <div className="user-info">
          <h3>User Name</h3>
          <span className="status">Online</span>
        </div>
      </div>
      
      <nav className="nav-menu">
        <Link to="/dashman" className="nav-item active">
          <i className="icon-dashboard">🏠</i>
          <span>Dashboard</span>
        </Link>
        <Link to="/trip" className="nav-item">
          <i className="icon-trips">✈️</i>
          <span>Trips</span>
        </Link>
        <Link to="/expense" className="nav-item">
          <i className="icon-expenses">💰</i>
          <span>Expenses</span>
        </Link>
        <Link to="/notification" className="nav-item">
          <i className="icon-notifications">🔔</i>
          <span>Notifications</span>
        </Link>
        <Link to="/profilee" className="nav-item">
          <i className="icon-profile">👤</i>
          <span>Profile</span>
        </Link>
        <button className="nav-item logout-btn" onClick={handleLogout}>
          <i className="icon-logout">🚪</i>
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebarrr;