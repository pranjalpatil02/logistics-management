import React, { useState } from 'react';
import './Trips.css';
import Sidebarrr from './Sidebarrr';

const Trip = () => {
  const [trips, setTrips] = useState([
    { id: '001', employeeName: 'John Doe', date: '12/02/2025', startLocation: 'New York', destination: 'LA', kmTraveled: '2500 KM', status: 'Pending' },
    { id: '002', employeeName: 'Jane Smith', date: '15/02/2025', startLocation: 'SF', destination: 'Chicago', kmTraveled: '1800 KM', status: 'Pending' },
  ]);

  const handleApprove = (tripId) => {
    setTrips(trips.map(trip => 
      trip.id === tripId ? { ...trip, status: 'Approved' } : trip
    ));
  };

  const handleReject = (tripId) => {
    setTrips(trips.map(trip => 
      trip.id === tripId ? { ...trip, status: 'Rejected' } : trip
    ));
  };

  return (
    <div className="trips-container">
      <h1 className="trips-title">Hello, Boss!</h1>
      
      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-icon check"></div>
          <div className="stat-content">
            <h2>5 Trips</h2>
            <p>Awaiting Approval</p>
          </div>
        </div>
        <div className="sidebarrr">
           <Sidebarrr />
        </div>
        <div className="stat-card">
          <div className="stat-icon check"></div>
          <div className="stat-content">
            <h2>120 Trips</h2>
            <p>This Month</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon location"></div>
          <div className="stat-content">
            <h2>25,000 KM</h2>
            <p>Recorded</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon money"></div>
          <div className="stat-content">
            <h2>3 Requests</h2>
            <p>Pending</p>
          </div>
        </div>
      </div>

      <div className="trips-table-section">
        <h2>Trip Approvals</h2>
        <div className="trips-table-container">
          <table className="trips-table">
            <thead>
              <tr>
                <th>Trip No.</th>
                <th>Employee Name</th>
                <th>Date & Time</th>
                <th>Start Location → Destination</th>
                <th>KM Traveled</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {trips.map(trip => (
                <tr key={trip.id}>
                  <td>{trip.id}</td>
                  <td>{trip.employeeName}</td>
                  <td>{trip.date}</td>
                  <td>{trip.startLocation} → {trip.destination}</td>
                  <td>{trip.kmTraveled}</td>
                  <td>
                    <span className={`status-badge ${trip.status.toLowerCase()}`}>
                      {trip.status}
                    </span>
                  </td>
                  <td className="action-buttons">
                    {trip.status === 'Pending' && (
                      <>
                        <button 
                          className="approve-btn"
                          onClick={() => handleApprove(trip.id)}
                        >
                          ✓
                        </button>
                        <button 
                          className="reject-btn"
                          onClick={() => handleReject(trip.id)}
                        >
                          ✕
                        </button>
                      </>
                    )}
                    <button className="view-btn">👁</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trip;