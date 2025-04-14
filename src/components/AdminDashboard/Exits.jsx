import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/AdminDashboard/Table.css";
import Sidebar from "./Sidebar";

const Exits = () => {
  const [exits, setExits] = useState([]);

  useEffect(() => {
    const fetchExits = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gatepass/all");
        const exitData = response.data.filter((entry) => entry.type === "exit");
        setExits(exitData);
      } catch (error) {
        console.error("Error fetching exits:", error);
      }
    };

    fetchExits();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="gatepass-content">
        <h1>Total Exits</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Purpose</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {exits.map((exit, index) => (
              <tr key={index}>
                <td>{exit.name}</td>
                <td>{exit.email}</td>
                <td>{exit.date}</td>
                <td>{exit.time}</td>
                <td>{exit.purpose}</td>
                <td>{exit.companyPlace}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exits;
