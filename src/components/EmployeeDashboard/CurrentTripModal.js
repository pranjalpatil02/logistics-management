import React from 'react';
import './CurrentTripModal.css';

const CurrentTripModal = ({ onClose }) => {
  // Mock current trip data - in a real app, this would come from props or state
  const currentTrip = {
    route: 'New York to Boston',
    type: 'Business Trip',
    status: 'Active',
    startDate: 'Mar 15, 2024',
    endDate: 'Mar 20, 2024',
    distance: '450 km',
    duration: '5 days',
    purpose: 'Client Meeting',
    notes: 'Meeting with key stakeholders to discuss Q2 strategy',
    checkpoints: [
      { location: 'New York', time: '08:00 AM', status: 'Completed' },
      { location: 'Hartford', time: '11:30 AM', status: 'In Progress' },
      { location: 'Boston', time: '02:00 PM', status: 'Pending' }
    ]
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content current-trip-modal">
        <div className="modal-header">
          <h2>Current Trip Details</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="trip-info-container">
          <div className="trip-main-info">
            <div className="info-group">
              <h3>Route</h3>
              <p>{currentTrip.route}</p>
            </div>
            <div className="info-row">
              <div className="info-group">
                <h3>Type</h3>
                <p>{currentTrip.type}</p>
              </div>
              <div className="info-group">
                <h3>Status</h3>
                <p className={`status ${currentTrip.status.toLowerCase()}`}>
                  {currentTrip.status}
                </p>
              </div>
            </div>
          </div>

          <div className="trip-details">
            <div className="info-row">
              <div className="info-group">
                <h3>Start Date</h3>
                <p>{currentTrip.startDate}</p>
              </div>
              <div className="info-group">
                <h3>End Date</h3>
                <p>{currentTrip.endDate}</p>
              </div>
            </div>
            <div className="info-row">
              <div className="info-group">
                <h3>Distance</h3>
                <p>{currentTrip.distance}</p>
              </div>
              <div className="info-group">
                <h3>Duration</h3>
                <p>{currentTrip.duration}</p>
              </div>
            </div>
          </div>

          <div className="trip-purpose">
            <h3>Purpose</h3>
            <p>{currentTrip.purpose}</p>
          </div>

          <div className="trip-notes">
            <h3>Notes</h3>
            <p>{currentTrip.notes}</p>
          </div>

          <div className="trip-checkpoints">
            <h3>Checkpoints</h3>
            <div className="checkpoints-list">
              {currentTrip.checkpoints.map((checkpoint, index) => (
                <div key={index} className="checkpoint-item">
                  <div className="checkpoint-status">
                    <span className={`status-dot ${checkpoint.status.toLowerCase()}`} />
                  </div>
                  <div className="checkpoint-info">
                    <p className="location">{checkpoint.location}</p>
                    <p className="time">{checkpoint.time}</p>
                  </div>
                  <p className={`checkpoint-status-text ${checkpoint.status.toLowerCase()}`}>
                    {checkpoint.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CurrentTripModal;