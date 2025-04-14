import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/AdminDashboard/gatepassestoday.css";
import Sidebar from "../AdminDashboard/Sidebar";

const GatepassesToday = () => {
  const [gatepasses, setGatepasses] = useState([]);
  
  useEffect(() => {
    const fetchTodayGatepasses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gatepass/all");
        console.log("✅ All Gatepasses:", response.data); // Debugging API response

        const today = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD
        console.log("📅 Today's Date:", today);

        const todayData = response.data.filter((entry) => {
          if (!entry.date) return false; // Ignore records without a date

          let entryDate;
          try {
            // Attempt to normalize the date format
            entryDate = new Date(entry.date).toISOString().split("T")[0];
          } catch (error) {
            console.error(`❌ Invalid date format for entry:`, entry);
            return false;
          }

          console.log(`🔍 Comparing: Entry Date ${entryDate} === Today ${today}`);
          return entryDate === today;
        });

        console.log("✅ Filtered Today's Data:", todayData);
        setGatepasses(todayData);
      } catch (error) {
        console.error("❌ Error fetching today's gatepasses:", error);
      }
    };

    fetchTodayGatepasses();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="gatepasses-today">
        <h1>📜 Today's Gatepasses</h1>
        <table>
          <thead>
            <tr>
              <th>Exit or Entry</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {gatepasses.length > 0 ? (
              gatepasses.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.type || "N/A"}</td>
                  <td>{entry.name || "N/A"}</td>
                  <td>{entry.email || "N/A"}</td>
                  <td>{entry.date || "N/A"}</td>
                  <td>{entry.time || "N/A"}</td>
                  <td>{entry.companyPlace || "N/A"}</td>
                  <td>{entry.purpose || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", color: "red" }}>
                  🚫 No Gatepasses Found for Today
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GatepassesToday;
