import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/AdminDashboard/Buttons.css";
import Sidebar from "./Sidebar";

const Locations = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([
    "Tech Elecon Pvt. Ltd.",
    "Elecon Engineering Co Ltd.",
    "Eimco Elecon Manufacture",
    "Elecon Peripherals Limited",
    "Elecon Cricket Academy",
    "Elecon Tennis Academy",
  ]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gatepass/all");
        const dynamicLocations = [...new Set(response.data.map((entry) => entry.companyPlace))];
        setLocations((prevLocations) => [...new Set([...prevLocations, ...dynamicLocations])]);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="location-content">
        <h1>Locations</h1>
        {locations.map((location, index) => (
          <button key={index} onClick={() => navigate(`/locations/${location.toLowerCase()}`)}>
            {location}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Locations;
