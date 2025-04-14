import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/EmployeeDashboard/Sidebar.css"; // Custom CSS if needed

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", icon: "https://cdn-icons-png.flaticon.com/128/1828/1828859.png", path: "/employee-dash" },
    { label: "Trips", icon: "https://cdn-icons-png.flaticon.com/128/743/743131.png", path: "/trips" },
    { label: "Expenses", icon: "https://cdn-icons-png.flaticon.com/128/3330/3330310.png", path: "/expenses" },
    { label: "Notifications", icon: "https://cdn-icons-png.flaticon.com/128/1827/1827392.png", path: "/notifications" },
    { label: "Profile", icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png", path: "/profile" },
  ];

  return (
    <div className="sidebar">
      <div className="logo"> 
        <h2 style={{ margin: "0 20px" }}>🌀 LOGO</h2>
      </div>

      <div className="user-section">
        <img src="https://i.pravatar.cc/40" alt="avatar" className="avatar" />
        <div className="user-info">
          <h4>John Smith</h4>
          <p className="online"><span className="dot" /> Online</p>
        </div>
      </div>

      <ul className="nav-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${location.pathname === item.path ? "active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            <img src={item.icon} alt={item.label} className="menu-icon" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
