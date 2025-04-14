import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import "../../styles/AdminDashboard/PurposePage.css";
import Sidebar from "./Sidebar";

const PurposePage = () => {
  const { purpose } = useParams();
  const adminEmail = localStorage.getItem("adminEmail");
  const [purposeData, setPurposeData] = useState([]);

  useEffect(() => {
    const fetchPurposeData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gatepass/all");
        const filteredData = response.data.filter((entry) => entry.purpose.toLowerCase() === purpose.toLowerCase());
        setPurposeData(filteredData);
      } catch (error) {
        console.error("Error fetching purpose data:", error);
      }
    };

    fetchPurposeData();
  }, [purpose]);

  if (!adminEmail) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h2>Purpose: {purpose ? purpose.toUpperCase() : "N/A"}</h2>
        {purposeData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Entry/Exit</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {purposeData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.type}</td>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.date}</td>
                  <td>{entry.time}</td>
                  <td>{entry.companyPlace}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No records found for this purpose.</p>
        )}
      </div>
    </div>
  );
};

export default PurposePage;
