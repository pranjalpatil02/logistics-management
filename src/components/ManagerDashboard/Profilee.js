import React, { useState } from 'react';
import './Profile.css';
import Sidebarrr from './Sidebarrr';

const Profilee = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@company.com',
    phone: '+1 (555) 123-4567',
    department: 'Sales',
    position: 'Senior Account Manager',
    employeeId: 'EMP001234',
    officeLocation: 'New York',
    status: 'Online',
    avatar: 'https://via.placeholder.com/40',
    notifications: {
      tripRequests: true,
      expenseApprovals: true,
      monthlySummary: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="header-left">
          <h1>Profile</h1>
          <p>Manage your account settings</p>
        </div>
        <button className="save-changes-btn" onClick={handleSubmit}>Save Changes</button>
      </div>

      <div className="user-profile-card">
        <img src={formData.avatar} alt="User avatar" className="avatar" />
        <div className="user-info">
          <h3>{formData.firstName} {formData.lastName}</h3>
          <span className="status">{formData.status}</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📬</div>
          <div className="stat-info">
            <h3>Total Notifications</h3>
            <div className="stat-count">24</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📫</div>
          <div className="stat-info">
            <h3>Unread</h3>
            <div className="stat-count">8</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-info">
            <h3>Today</h3>
            <div className="stat-count">12</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-info">
            <h3>This Week</h3>
            <div className="stat-count">42</div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-section">
          <h2>Personal Information</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Company Information</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employeeId">Employee ID</label>
              <input
                type="text"
                id="employeeId"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleInputChange}
              />
            </div>
            <div className="sidebarrr">
           <Sidebarrr />
            </div>
            <div className="form-group">
              <label htmlFor="officeLocation">Office Location</label>
              <input
                type="text"
                id="officeLocation"
                name="officeLocation"
                value={formData.officeLocation}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Preferences</h2>
          <div className="preferences-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="tripRequests"
                checked={formData.notifications.tripRequests}
                onChange={handleCheckboxChange}
              />
              Email notifications for new trip requests
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="expenseApprovals"
                checked={formData.notifications.expenseApprovals}
                onChange={handleCheckboxChange}
              />
              Email notifications for expense approvals
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="monthlySummary"
                checked={formData.notifications.monthlySummary}
                onChange={handleCheckboxChange}
              />
              Monthly account summary
            </label>
          </div>
        </div>

        <div className="form-actions">
          
        </div>
      </form>
    </div>
  );
};

export default Profilee;