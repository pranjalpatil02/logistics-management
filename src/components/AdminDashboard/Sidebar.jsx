import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminDashboard/Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Access</h2>
        <ul>
          <li onClick={() => navigate("/gatepassestoday")}>
            <img src="https://cdn-icons-png.flaticon.com/128/10099/10099680.png" width="20px" alt="Gatepasses Icon" /> 
            Today's Gatepasses
          </li>
          <li onClick={() => navigate("/entries")}>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828466.png" width="20px" alt="Entries Icon" />  
            Today's Total Entries
          </li>
          <li onClick={() => navigate("/exits")}>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828490.png" width="20px" alt="Exits Icon" />  
            Today's Total Exits
          </li>
          <li onClick={() => navigate("/gatepasshistory")}>
            <img src="https://cdn-icons-png.flaticon.com/128/2530/2530313.png" width="20px" alt="Gatepass History Icon" />  
            All Gatepass History
          </li>
          <li onClick={() => navigate("/locations")}>
            <img src="https://cdn-icons-png.flaticon.com/128/9800/9800512.png" width="20px" alt="Locations Icon" />  
            Locations wise data
          </li>
          <li onClick={() => navigate("/purposes")}>
            <img src="https://cdn-icons-png.flaticon.com/128/971/971152.png" width="20px" alt="Purposes Icon" />  
            Purposes wise data
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
