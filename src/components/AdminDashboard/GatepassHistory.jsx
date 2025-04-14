import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/AdminDashboard/GatepassHistory.css";
import Sidebar from "./Sidebar";

const GatepassHistory = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gatepass/all");
        setHistoryData(response.data);
      } catch (error) {
        console.error("Error fetching gatepass history:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="gatepass-content">
        <h2>Gatepass History</h2>
        <table>
          <thead>
            <tr>
              <th>Entry or Exit</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.type}</td>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.date}</td>
                <td>{entry.time}</td>
                <td>{entry.companyPlace}</td>
                <td>{entry.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GatepassHistory;