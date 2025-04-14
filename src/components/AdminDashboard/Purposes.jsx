import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../AdminDashboard/Sidebar"; 
import "../../styles/AdminDashboard/Buttons.css";

const Purposes = () => {
  const navigate = useNavigate();
  const [purposes, setPurposes] = useState([
    "Visitor",
    "Employee",
    "Vehicle",
    "Temporary",
    "Non-returnable Material",
    "Returnable Material",
    "Other",
  ]);

  useEffect(() => {
    const fetchPurposes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gatepass/all");
        const dynamicPurposes = [...new Set(response.data.map((entry) => entry.purpose))];
        setPurposes((prevPurposes) => [...new Set([...prevPurposes, ...dynamicPurposes])]);
      } catch (error) {
        console.error("Error fetching purposes:", error);
      }
    };

    fetchPurposes();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="gatepass-content">
        <h1>Purposes</h1>
        {purposes.map((purpose, index) => (
          <button key={index} onClick={() => navigate(`/purpose/${purpose.toLowerCase()}`)}>
            {purpose}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Purposes;
