import React from 'react';
import './Modal.css';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

const NewTripForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = React.useState({
    from: '',
    to: '',
    startDate: '',
    endDate: '',
    purpose: '',
    budget: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            name="from"
            placeholder="City or Airport"
            value={formData.from}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input
            type="text"
            id="to"
            name="to"
            placeholder="City or Airport"
            value={formData.to}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="purpose">Purpose</label>
        <input
          type="text"
          id="purpose"
          name="purpose"
          placeholder="Business Meeting, Conference, etc."
          value={formData.purpose}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="budget">Budget</label>
        <input
          type="number"
          id="budget"
          name="budget"
          placeholder="Enter amount"
          value={formData.budget}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Additional details about the trip"
          value={formData.notes}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="modal-footer">
        <button type="button" className="modal-btn cancel" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="modal-btn create">
          Create Trip
        </button>
      </div>
    </form>
  );
};

export { Modal, NewTripForm };