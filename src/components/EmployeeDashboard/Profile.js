import React, { useState, useEffect } from 'react';
import './Profile.css';
import StatBox from './StatBox';
import Sidebarr from './Sidebarr';
import ProfileModal from './ProfileModal';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    personal: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      profilePicture: ''
    },
    work: {
      department: 'Travel Management',
      position: 'Senior Travel Manager',
      employeeId: 'EMP0012345',
      joinDate: 'January 15, 2020'
    }
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const profileData = JSON.parse(savedProfile);
      setUserInfo(prev => ({
        ...prev,
        personal: {
          ...prev.personal,
          fullName: profileData.fullName,
          email: profileData.email,
          phone: profileData.phone,
          location: profileData.location,
          profilePicture: profileData.profilePicture
        }
      }));
    }
  }, []);

  const travelStats = {
    totalTrips: { value: '127', icon: '✈️' },
    countriesVisited: { value: '23', icon: '🌎' },
    travelHours: { value: '482', icon: '⏰' },
    pendingTrips: { value: '3', icon: '🕒' }
  };

  const expenseStats = {
    totalExpenses: { value: '$24,856', icon: '💰' },
    thisMonth: { value: '$3,428', icon: '📅' },
    pendingClaims: { value: '$1,200', icon: '⏳' },
    approvedClaims: { value: '$2,845', icon: '✅' }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={userInfo.personal.profilePicture || "https://via.placeholder.com/100"} alt="Profile" />
        </div>
        <div className="profile-title">
          <h1>{userInfo.personal.fullName}</h1>
          <p>{userInfo.work.position}</p>
          <p>{userInfo.personal.email}</p>
        </div>
        <button className="edit-profile-btn" onClick={() => setIsModalOpen(true)}>Edit Profile</button>
      </div>
      <div className="sidebarr">
           <Sidebarr />
        </div>
      <div className="info-sections">
        <div className="info-section">
          <h2>Personal Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Full Name</label>
              <p>{userInfo.personal.fullName}</p>
            </div>
            <div className="info-item">
              <label>Email Address</label>
              <p>{userInfo.personal.email}</p>
            </div>
            <div className="info-item">
              <label>Phone Number</label>
              <p>{userInfo.personal.phone}</p>
            </div>
            <div className="info-item">
              <label>Location</label>
              <p>{userInfo.personal.location}</p>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h2>Work Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Department</label>
              <p>{userInfo.work.department}</p>
            </div>
            <div className="info-item">
              <label>Position</label>
              <p>{userInfo.work.position}</p>
            </div>
            <div className="info-item">
              <label>Employee ID</label>
              <p>{userInfo.work.employeeId}</p>
            </div>
            <div className="info-item">
              <label>Join Date</label>
              <p>{userInfo.work.joinDate}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Travel Statistics</h2>
        <div className="stats-grid">
          <StatBox title="Total Trips" {...travelStats.totalTrips} />
          <StatBox title="Countries Visited" {...travelStats.countriesVisited} />
          <StatBox title="Travel Hours" {...travelStats.travelHours} />
          <StatBox title="Pending Trips" {...travelStats.pendingTrips} />
        </div>
      </div>

      <div className="stats-section">
        <h2>Expense Overview</h2>
        <div className="stats-grid">
          <StatBox title="Total Expenses" {...expenseStats.totalExpenses} />
          <StatBox title="This Month" {...expenseStats.thisMonth} />
          <StatBox title="Pending Claims" {...expenseStats.pendingClaims} />
          <StatBox title="Approved Claims" {...expenseStats.approvedClaims} />
        </div>
      </div>
      <ProfileModal
        isOpen={isModalOpen}
        onClose={(formData) => {
          if (formData) {
            localStorage.setItem('userProfile', JSON.stringify(formData));
            setUserInfo(prev => ({
              ...prev,
              personal: {
                ...prev.personal,
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                location: formData.location,
                profilePicture: formData.profilePicture
              }
            }));
          }
          setIsModalOpen(false);
        }}
        initialData={{
          fullName: userInfo.personal.fullName,
          email: userInfo.personal.email,
          phone: userInfo.personal.phone,
          location: userInfo.personal.location
        }}
        isEditing={true}
      />
    </div>
  );
};

export default Profile;