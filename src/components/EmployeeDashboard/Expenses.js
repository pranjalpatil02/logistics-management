import React, { useState } from 'react';
import './Expenses.css';
import NewExpense from './NewExpense';
import Sidebarr from './Sidebarr';

const Expenses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Expenses');

  const expenses = [
    {
      title: 'Hotel Accommodation',
      location: 'Marriott Hotel - New York',
      date: 'Mar 15, 2024',
      amount: '$450.00',
      category: 'Accommodation',
      status: 'Active'
    },
    {
      title: 'Flight Ticket',
      location: 'Delta Airlines - Chicago to Detroit',
      date: 'Mar 25, 2024',
      amount: '$320.00',
      category: 'Transportation',
      status: 'Pending'
    },
    {
      title: 'Meal Expenses',
      location: 'Business Dinner - LA',
      date: 'Mar 1, 2024',
      amount: '$125.00',
      category: 'Meals',
      status: 'Completed'
    }
  ];

  const stats = {
    totalExpenses: '$15,240',
    thisMonth: '$2,450',
    pending: '$890',
    approved: '$1,580'
  };

  const [showNewExpenseModal, setShowNewExpenseModal] = useState(false);

  const handleCreateExpense = (expenseData) => {
    // TODO: Implement expense creation logic
    console.log('New expense:', expenseData);
  };

  return (
    <div className="expenses-container">
      <div className="expenses-header">
        <div className="expenses-title">
          <h1>Expenses</h1>
          <p>Track and manage your travel expenses</p>
        </div>
        <div className="sidebarr">
           <Sidebarr />
        </div>
        <div className="expenses-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search expenses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="new-expense-btn" onClick={() => setShowNewExpenseModal(true)}>
            + New Expense
          </button>
          {showNewExpenseModal && (
            <NewExpense
              onClose={() => setShowNewExpenseModal(false)}
              onCreateExpense={handleCreateExpense}
            />
          )}
        </div>
      </div>

      <div className="expenses-filter">
        <button
          className={`filter-btn ${activeFilter === 'All Expenses' ? 'active' : ''}`}
          onClick={() => setActiveFilter('All Expenses')}
        >
          All Expenses
        </button>
        <button
          className={`filter-btn ${activeFilter === 'Pending' ? 'active' : ''}`}
          onClick={() => setActiveFilter('Pending')}
        >
          Pending
        </button>
        <button
          className={`filter-btn ${activeFilter === 'Approved' ? 'active' : ''}`}
          onClick={() => setActiveFilter('Approved')}
        >
          Approved
        </button>
      </div>

      <div className="expenses-list">
        {expenses.map((expense, index) => (
          <div key={index} className="expense-card">
            <div className="expense-header">
              <h3>{expense.title}</h3>
              <span className={`status ${expense.status.toLowerCase()}`}>
                {expense.status}
              </span>
            </div>
            <p className="expense-location">{expense.location}</p>
            <div className="expense-details">
              <div className="detail-item">
                <span className="icon">📅</span>
                <span>{expense.date}</span>
              </div>
              <div className="detail-item">
                <span className="icon">💰</span>
                <span>{expense.amount}</span>
              </div>
              <div className="detail-item">
                <span className="icon">🏷️</span>
                <span>{expense.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="expense-statistics">
        <h2>Expense Statistics</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <p className="stat-title">Total Expenses</p>
              <p className="stat-value">{stats.totalExpenses}</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">📅</div>
            <div className="stat-content">
              <p className="stat-title">This Month</p>
              <p className="stat-value">{stats.thisMonth}</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <p className="stat-title">Pending</p>
              <p className="stat-value">{stats.pending}</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <p className="stat-title">Approved</p>
              <p className="stat-value">{stats.approved}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;