import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/AdminDashboard/LocationPage.css";
import Sidebar from "./Sidebar";

const LocationPage = () => {
  const { location } = useParams();
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gatepass/all");
        const filteredData = response.data.filter((entry) => entry.companyPlace.toLowerCase() === location.toLowerCase());
        setLocationData(filteredData);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocationData();
  }, [location]);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="location-content">
        <h2>Location: {location ? location.toUpperCase() : "Not Found"}</h2>
        {locationData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Entry/Exit</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {locationData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.type}</td>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.date}</td>
                  <td>{entry.time}</td>
                  <td>{entry.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No records found for this location.</p>
        )}
      </div>
    </div>
  );
};

export default LocationPage;
