import React, { useState, useEffect } from 'react';
import './ProfileModal.css';

const ProfileModal = ({ isOpen, onClose, initialData, isEditing }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    location: '',
    email: '',
    department: '',
    position: '',
    employeeId: '',
    joinDate: '',
    profilePicture: ''
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData({
        fullName: initialData.fullName || '',
        phone: initialData.phone || '',
        location: initialData.location || '',
        email: initialData.email || '',
        department: initialData.department || '',
        position: initialData.position || '',
        employeeId: initialData.employeeId || '',
        joinDate: initialData.joinDate || '',
        profilePicture: initialData.profilePicture || ''
      });
      if (initialData.profilePicture) {
        setImagePreview(initialData.profilePicture);
      }
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
          setFormData(prev => ({
            ...prev,
            profilePicture: reader.result
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isEditing ? 'Edit Profile' : 'Create Profile'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="profile-picture-section">
            <div className="profile-picture-preview">
              {imagePreview ? (
                <img src={imagePreview} alt="Profile Preview" />
              ) : (
                <div className="profile-picture-placeholder">
                  <span>No image selected</span>
                </div>
              )}
            </div>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              onChange={handleChange}
              className="profile-picture-input"
            />
            <label htmlFor="profilePicture" className="profile-picture-label">
              Choose Profile Picture
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="employeeId">Employee ID</label>
            <input
              type="text"
              id="employeeId"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="joinDate">Join Date</label>
            <input
              type="date"
              id="joinDate"
              name="joinDate"
              value={formData.joinDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="modal-actions">
            <button type="button" onClick={() => onClose(null)} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              {isEditing ? 'Save Changes' : 'Create Profile'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;