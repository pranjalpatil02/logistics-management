import React, { useState } from 'react';
import axios from 'axios';
import './NewExpense.css';

const NewExpense = ({ onClose }) => {
  const [expenseData, setExpenseData] = useState({
    title: '',
    date: '',
    amount: '',
    category: '',
    receipt: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setExpenseData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setExpenseData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(expenseData).forEach((key) => {
      formData.append(key, expenseData[key]);
    });

    try {
      const response = await axios.post('http://localhost:5000/api/expenses', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('✅ Expense created successfully!');
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error('❌ Error creating expense:', error);
      alert('❌ Failed to create expense. Try again.');
    }
  };

  return (
    <div className="new-expense-modal">
      <div className="modal-content">
        <h2>Create New Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={expenseData.title} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input type="date" name="date" value={expenseData.date} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input type="number" name="amount" value={expenseData.amount} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select name="category" value={expenseData.category} onChange={handleChange} required>
              <option value="">Select category</option>
              <option value="food">Food</option>
              <option value="transportation">Transportation</option>
              <option value="utilities">Utilities</option>
              <option value="entertainment">Entertainment</option>
              <option value="shopping">Shopping</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Receipt (optional)</label>
            <input type="file" name="receipt" accept="image/*,.pdf" onChange={handleChange} />
          </div>

          <div className="modal-footer">
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
            <button type="submit" className="create-btn">Create Expense</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewExpense;
