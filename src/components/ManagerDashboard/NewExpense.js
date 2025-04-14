import React, { useState } from 'react';
import './NewExpense.css';

const NewExpense = ({ onClose }) => {
  const [expenseData, setExpenseData] = useState({
    title: '',
    date: '',
    amount: '',
    category: '',
    receipt: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setExpenseData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setExpenseData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(expenseData).forEach(key => {
      formData.append(key, expenseData[key]);
    });

    try {
      const response = await fetch("http://localhost:5000/api/manager/expenses", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Expense created successfully!");
        console.log("Response:", result);
        onClose();
      } else {
        alert(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      console.error("❌ Error submitting expense:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="new-expense-modal">
      <div className="modal-content">
        <h2>Create New Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Expense title"
              value={expenseData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={expenseData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="0.00"
              step="0.01"
              min="0"
              value={expenseData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={expenseData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="food">Food & Dining</option>
              <option value="transportation">Transportation</option>
              <option value="utilities">Utilities</option>
              <option value="entertainment">Entertainment</option>
              <option value="shopping">Shopping</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Receipt</label>
            <div className="file-upload-container">
              <input
                type="file"
                name="receipt"
                onChange={handleChange}
                accept="image/*,.pdf"
                className="file-input"
                id="receipt-upload"
              />
              <label htmlFor="receipt-upload" className="file-upload-label">
                <span className="upload-icon">📎</span>
                {expenseData.receipt ? expenseData.receipt.name : 'Upload a file or drag and drop'}
              </label>
            </div>
            <p className="file-hint">Accepted formats: Images, PDF (Max size: 10MB)</p>
          </div>

          <div className="modal-footer">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="create-btn">Create Expense</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewExpense;
