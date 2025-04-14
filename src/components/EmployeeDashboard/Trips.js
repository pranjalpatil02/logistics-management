import React, { useState } from 'react';
import './Trips.css';
import NewTrip from './NewTrip';
import Sidebarr from './Sidebarr';

const Trips = () => {
  const [showNewTripModal, setShowNewTripModal] = useState(false);

  const handleCreateTrip = (tripData) => {
    // TODO: Implement trip creation logic
    console.log('New trip:', tripData);
  };

  const trips = [
    {
      route: 'New York to Boston',
      type: 'Business Trip',
      status: 'Active',
      dateRange: 'Mar 15 - Mar 20, 2024',
      distance: '450 km',
      duration: '5 days'
    },
    {
      route: 'Chicago to Detroit',
      type: 'Client Meeting',
      status: 'Pending',
      dateRange: 'Mar 25 - Mar 27, 2024',
      distance: '382 km',
      duration: '3 days'
    },
    {
      route: 'San Francisco to LA',
      type: 'Conference',
      status: 'Completed',
      dateRange: 'Mar 1 - Mar 5, 2024',
      distance: '615 km',
      duration: '5 days'
    }
  ];

  const stats = {
    totalTrips: 24,
    totalDistance: '12,450 km',
    totalDays: 85,
    totalExpenses: '$15,240'
  };

  return (
    <div className="trips-container">
      <div className="trips-header">
        <div className="trips-title">
          <h1>My Trips</h1>
          <p>Manage your upcoming and past trips</p>
        </div>
        <div className="trips-actions">
          <div className="search-box">
            <input type="text" placeholder="Search trips..." />
          </div>
          <button className="new-trip-btn" onClick={() => setShowNewTripModal(true)}>+ New Trip</button>
          {showNewTripModal && (
            <NewTrip
              onClose={() => setShowNewTripModal(false)}
              onCreateTrip={handleCreateTrip}
            />
          )}
        </div>
      </div>
      <div className="sidebarr">
           <Sidebarr />
        </div>

      <div className="trips-filter">
        <button className="filter-btn active">All Trips</button>
      </div>

      <div className="trips-list">
        {trips.map((trip, index) => (
          <div key={index} className="trip-card">
            <div className="trip-header">
              <h3>{trip.route}</h3>
              <span className={`status ${trip.status.toLowerCase()}`}>{trip.status}</span>
            </div>
            <p className="trip-type">{trip.type}</p>
            <div className="trip-details">
              <div className="detail-item">
                <span className="icon">📅</span>
                <span>{trip.dateRange}</span>
              </div>
              <div className="detail-item">
                <span className="icon">📍</span>
                <span>{trip.distance}</span>
              </div>
              <div className="detail-item">
                <span className="icon">⏱️</span>
                <span>{trip.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="trip-statistics">
        <h2>Trip Statistics</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-icon">🚗</div>
            <div className="stat-content">
              <p className="stat-title">Total Trips</p>
              <p className="stat-value">{stats.totalTrips}</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">📍</div>
            <div className="stat-content">
              <p className="stat-title">Total Distance</p>
              <p className="stat-value">{stats.totalDistance}</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">📅</div>
            <div className="stat-content">
              <p className="stat-title">Total Days</p>
              <p className="stat-value">{stats.totalDays}</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <p className="stat-title">Total Expenses</p>
              <p className="stat-value">{stats.totalExpenses}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;