import React, { useState } from 'react';
import './Expenses.css';
import { FaDollarSign, FaCalendarAlt, FaHourglassHalf, FaCheckCircle } from 'react-icons/fa';
import { Modal } from './Modal';
import ExpenseForm from './ExpenseForm';
import Sidebarrr from './Sidebarrr';
const Expense = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [dateRange, setDateRange] = useState('Last 30 days');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([{
    id: 1,
    employeeName: 'John Doe',
    tripNo: '001',
    expenseType: 'Travel',
    amount: '$500',
    status: 'Pending'
  },
  {
    id: 2,
    employeeName: 'Jane Smith',
    tripNo: '002',
    expenseType: 'Accommodation',
    amount: '$750',
    status: 'Pending'
  }]);

  const expenseStats = [
    { title: 'Total Expenses', value: '$12,450', icon: FaDollarSign, color: '#4361ee' },
    { title: 'This Month', value: '$3,280', icon: FaCalendarAlt, color: '#3182ce' },
    { title: 'Pending', value: '$890', icon: FaHourglassHalf, color: '#dd6b20' },
    { title: 'Reimbursed', value: '$8,280', icon: FaCheckCircle, color: '#2f855a' }
  ];

  const handleApprove = (id) => {
    setExpenses(expenses.map(expense => 
      expense.id === id ? { ...expense, status: 'Approved' } : expense
    ));
  };

  const handleReject = (id) => {
    setExpenses(expenses.map(expense => 
      expense.id === id ? { ...expense, status: 'Rejected' } : expense
    ));
  };

  const categories = ['All Categories', 'Accommodation', 'Transportation', 'Meals', 'Entertainment', 'Others'];
  const dateRanges = ['Last 30 days', 'This Month', 'Last Month', 'Custom Range'];

  return (
      
    <div className="expenses-container">
      <div className="expenses-header">
        <h1>Expenses Management</h1>
        <p>Track and manage your travel expenses</p>
        <button className="add-expense-btn" onClick={() => setIsModalOpen(true)}>
          + Add Expense
        </button>
      </div>

      <div className="stats-grid">
        {expenseStats.map((stat, index) => (
          <div key={index} className="expense-stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}15` }}>
              <stat.icon style={{ color: stat.color }} />
            </div>
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <div className="stat-value">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebarrr">
        <Sidebarrr />
      </div>

      <div className="expenses-table-container">
        <div className="table-header">
          <h2>Recent Expenses</h2>
          <div className="table-filters">
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
            <select 
              value={dateRange} 
              onChange={(e) => setDateRange(e.target.value)}
              className="filter-select"
            >
              {dateRanges.map((range, index) => (
                <option key={index} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        <table className="expenses-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Trip No.</th>
              <th>Expense Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.employeeName}</td>
                <td>{expense.tripNo}</td>
                <td>{expense.expenseType}</td>
                <td>{expense.amount}</td>
                <td>
                  <span className={`status-badge ${expense.status.toLowerCase()}`}>
                    {expense.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="action-btn approve" 
                      title="Approve"
                      onClick={() => handleApprove(expense.id)}
                      disabled={expense.status !== 'Pending'}
                    >
                      <FaCheckCircle />
                    </button>
                    <button 
                      className="action-btn reject" 
                      title="Reject"
                      onClick={() => handleReject(expense.id)}
                      disabled={expense.status !== 'Pending'}
                    >
                      <span className="reject-icon">×</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Expense">
        <ExpenseForm
          onSubmit={(formData) => {
            console.log('New expense data:', formData);
            setIsModalOpen(false);
          }}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Expense;