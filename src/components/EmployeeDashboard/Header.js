import React, { useState } from 'react';
import './Header.css';
import ProfileModal from './ProfileModal';

const Header = ({ activeView }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = (formData) => {
    if (formData) {
      // Save the profile data to local storage
      localStorage.setItem('userProfile', JSON.stringify(formData));
    }
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="logo"></div>
      <h1>{activeView}</h1>
      <div className="header-actions">
        {activeView === 'Dashboard' && (
          <>
            <button className="notification-btn">🔔</button>
            <button className="profile-btn" onClick={() => setIsModalOpen(true)}>
              Create Profile
            </button>
          </>
        )}
      </div>
      <ProfileModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        isEditing={false}
      />
    </header>
  );
};

export default Header;