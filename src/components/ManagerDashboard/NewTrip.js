import React, { useState } from 'react';
import './NewTrip.css';

const NewTrip = ({ onClose }) => {
  const [tripData, setTripData] = useState({
    from: '',
    to: '',
    startDate: '',
    endDate: '',
    purpose: 'Business Trip',
    budget: '',
    notes: ''
  });

  const purposeOptions = ['Business Trip', 'Raw Material', 'Company Waste'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/manager/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...tripData,
          createdByRole: 'manager' // ✅ Extra field sent to backend
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('✅ Manager Trip created successfully!');
        onClose(); // Close modal
      } else {
        alert(`❌ Failed: ${result.error}`);
      }
    } catch (error) {
      console.error('❌ Error submitting trip:', error);
      alert('❌ Something went wrong. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>From</label>
          <input
            type="text"
            name="from"
            placeholder="Location to destination"
            value={tripData.from}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>To</label>
          <input
            type="text"
            name="to"
            placeholder="Location to destination"
            value={tripData.to}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={tripData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={tripData.endDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Purpose</label>
        <select
          name="purpose"
          value={tripData.purpose}
          onChange={handleChange}
          required
        >
          {purposeOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Budget</label>
        <input
          type="number"
          name="budget"
          placeholder="Enter amount"
          value={tripData.budget}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Notes</label>
        <textarea
          name="notes"
          placeholder="Additional details about the trip"
          value={tripData.notes}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="modal-footer">
        <button type="button" className="cancel-btn" onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className="create-btn">
          Create Trip
        </button>
      </div>
    </form>
  );
};

export default NewTrip;
