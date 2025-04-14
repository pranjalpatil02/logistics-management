import React, { useState } from 'react';

const ExpenseForm = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    amount: '',
    date: '',
    description: '',
    receipt: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      receipt: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("amount", formData.amount);
    data.append("date", formData.date);
    data.append("description", formData.description);
    if (formData.receipt) {
      data.append("receipt", formData.receipt);
    }

    try {
      const res = await fetch("http://localhost:5000/api/manager/expenses", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (res.ok) {
        alert("✅ Expense saved!");
        onCancel();
      } else {
        alert("❌ Error: " + result.error);
      }
    } catch (err) {
      console.error("❌ Error submitting:", err);
      alert("❌ Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-group">
        <label>Expense Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select category</option>
            <option value="Accommodation">Accommodation</option>
            <option value="Transportation">Transportation</option>
            <option value="Meals">Meals</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-group">
        <label>Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} rows="3" />
      </div>

      <div className="form-group">
        <label>Attach Receipt</label>
        <input type="file" name="receipt" onChange={handleFileChange} accept="image/*, .pdf" />
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Save Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
