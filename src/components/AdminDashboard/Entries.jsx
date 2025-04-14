import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/AdminDashboard/Table.css";
import Sidebar from "./Sidebar";

const Entries = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gatepass/all");
        const entryData = response.data.filter((entry) => entry.type === "entry");
        setEntries(entryData);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="gatepass-content">
        <h1>Total Entries</h1>
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
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.date}</td>
                <td>{entry.time}</td>
                <td>{entry.purpose}</td>
                <td>{entry.companyPlace}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Entries;
