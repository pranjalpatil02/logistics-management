import React, { useState } from 'react';
import './Dashboard.css';
import { FaEnvelope, FaPlus, FaPlane, FaFileAlt, FaDollarSign, FaUsers, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Modal } from './Modal';
import NewTrip from './NewTrip';
import NewExpense from './NewExpense';
import CurrentTripModal from './CurrentTripModal';
import ProfileModal from './ProfileModal';
import Map from './Map';
import Sidebarrr from './Sidebarrr';

const ManDash = () => {
  const [isNewTripModalOpen, setIsNewTripModalOpen] = useState(false);
  const [isNewExpenseModalOpen, setIsNewExpenseModalOpen] = useState(false);
  const [isCurrentTripModalOpen, setIsCurrentTripModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleCreateTrip = (tripData) => {
    console.log('New trip data:', tripData);
    // Here you would typically send the data to your backend
    setIsNewTripModalOpen(false);
  };

  const handleCreateExpense = (expenseData) => {
    console.log('New expense data:', expenseData);
    // Here you would typically send the data to your backend
    setIsNewExpenseModalOpen(false);
  };
  const activities = [
    { type: 'Trip to Chicago', details: 'Distance: 450 km', status: 'Completed' },
    { type: 'Expense Submission', details: 'Amount: $345.00', status: 'Pending' },
    { type: 'Trip Request Approved', details: 'Route: New York - Boston', status: 'Approved' }
  ];

  const currentRoute = {
    from: 'Nadiad',
    to: 'Anand',
    distance: '22 km',
    estimatedTime: '30m'
  };

  // Current Route Section with Map
  const CurrentRouteSection = () => (
    <div className="current-route-section">
      <h2>Current Route</h2>
      <Map
        from={currentRoute.from}
        to={currentRoute.to}
        distance={currentRoute.distance}
        estimatedTime={currentRoute.estimatedTime}
      />
    </div>
  );

  const stats = [
    { title: 'Total Trips', value: '127', icon: 'trips' },
    { title: 'Pending Requests', value: '23', icon: 'pending' },
    { title: 'Total Budget', value: '$24,856', icon: 'budget' },
    { title: 'Active Users', value: '342', icon: 'users' }
  ];

  return (
    <div className="dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Dashboard Overview</h1>
          <p>Welcome back, John Smith</p>
        </div>
        <div className="sidebarrr">
           <Sidebarrr />
            </div>
        <div className="action-buttons">
          <button className="action-button mail-inbox">
            <FaEnvelope />
            Mail Inbox
          </button>
          <button className="action-button new-request">
            <FaPlus />
            New Request
          </button>
          <button className="action-button new-profile" onClick={() => setIsProfileModalOpen(true)}>
            <FaUsers />
            Create New Profile
          </button>
        </div>
      </div>
      {/* Stats Cards */}
      {stats.map((stat, index) => (
        <div key={index} className={`stats-card ${stat.icon}`}>
          <h3>{stat.title}</h3>
          <div className="value">{stat.value}</div>
          {stat.icon === 'trips' && <FaPlane className="icon" />}
          {stat.icon === 'pending' && <FaFileAlt className="icon" />}
          {stat.icon === 'budget' && <FaDollarSign className="icon" />}
          {stat.icon === 'users' && <FaUsers className="icon" />}
        </div>
      ))}

      {/* Recent Activities Section */}
      <div className="activities-section">
        <h2>Recent Activities</h2>
        <div className="activities-list">
          {activities.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-info">
                <div className="activity-type">{activity.type}</div>
                <div className="activity-details">{activity.details}</div>
              </div>
              <div className={`activity-status ${activity.status.toLowerCase()}`}>
                {activity.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="quick-actions-section">
        <h2>Quick Actions</h2>
        <div className="quick-actions-list">
          <button className="quick-action-button new-trip" onClick={() => setIsNewTripModalOpen(true)}>
            <FaPlus />
            New Trip Request
          </button>
          <button className="quick-action-button submit-expense" onClick={() => setIsNewExpenseModalOpen(true)}>
            <FaDollarSign />
            Submit Expense
          </button>
          <button className="quick-action-button view-trip" onClick={() => setIsCurrentTripModalOpen(true)}>
            <FaPlane />
            View Current Trip
          </button>
        </div>
      </div>

      {/* Current Route Section */}
      <CurrentRouteSection />

      {/* New Trip Modal */}
      <Modal isOpen={isNewTripModalOpen} onClose={() => setIsNewTripModalOpen(false)} title="New Trip Request">
        <NewTrip onClose={() => setIsNewTripModalOpen(false)} onCreateTrip={handleCreateTrip} />
      </Modal>

      {/* New Expense Modal */}
      <Modal isOpen={isNewExpenseModalOpen} onClose={() => setIsNewExpenseModalOpen(false)} title="New Expense">
        <NewExpense onClose={() => setIsNewExpenseModalOpen(false)} onCreateExpense={handleCreateExpense} />
      </Modal>
      {/* Current Trip Modal */}
      {isCurrentTripModalOpen && <CurrentTripModal onClose={() => setIsCurrentTripModalOpen(false)} />}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={(data) => {
          setIsProfileModalOpen(false);
          if (data) {
            console.log('Profile data:', data);
            // Here you would typically send the data to your backend
          }
        }}
        isEditing={false}
      />
    </div>
  );
};

export default ManDash;