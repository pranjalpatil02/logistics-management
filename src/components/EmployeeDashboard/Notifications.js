import React, { useState } from 'react';
import './Notifications.css';
import Sidebarr from './Sidebarr';

const Notifications = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Notifications');

  const notifications = [
    {
      id: 1,
      type: 'travel_request',
      title: 'New Travel Request Approved',
      message: 'Your travel request to New York has been approved by the manager.',
      timestamp: '2 hours ago',
      status: 'new',
      icon: '✈️'
    },
    {
      id: 2,
      type: 'expense_report',
      title: 'Expense Report Submitted',
      message: 'Your expense report #2024-03-15 has been submitted successfully.',
      timestamp: '5 hours ago',
      status: 'unread',
      icon: '📊'
    },
    {
      id: 3,
      type: 'trip_reminder',
      title: 'Upcoming Trip Reminder',
      message: "Don't forget your trip to Chicago next week. Please complete all pre-travel requirements.",
      timestamp: '1 day ago',
      status: 'read',
      icon: '🔔'
    }
  ];

  const stats = {
    total: 24,
    newToday: 8,
    unread: 12,
    read: 16
  };

  const handleNotificationClick = (id) => {
    // TODO: Implement notification click handling
    console.log('Notification clicked:', id);
  };

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <div className="notifications-title">
          <h1>Notifications</h1>
          <p>View and manage your notifications</p>
        </div>
        <div className="notifications-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="mark-all-btn" onClick={() => console.log('Mark all as read')}>
            Mark All as Read
          </button>
        </div>
      </div>

      <div className="notifications-stats">
        <div className="stat-box">
          <div className="stat-icon">📬</div>
          <div className="stat-content">
            <p className="stat-title">Total Notifications</p>
            <p className="stat-value">{stats.total}</p>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🆕</div>
          <div className="stat-content">
            <p className="stat-title">New Today</p>
            <p className="stat-value">{stats.newToday}</p>
          </div>
        </div>
        <div className="sidebarr">
           <Sidebarr />
        </div>
        <div className="stat-box">
          <div className="stat-icon">📩</div>
          <div className="stat-content">
            <p className="stat-title">Unread</p>
            <p className="stat-value">{stats.unread}</p>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">✓</div>
          <div className="stat-content">
            <p className="stat-title">Read</p>
            <p className="stat-value">{stats.read}</p>
          </div>
        </div>
      </div>

      <div className="notifications-filter">
        <button
          className={`filter-btn ${activeFilter === 'All Notifications' ? 'active' : ''}`}
          onClick={() => setActiveFilter('All Notifications')}
        >
          All Notifications
        </button>
        <button
          className={`filter-btn ${activeFilter === 'Unread' ? 'active' : ''}`}
          onClick={() => setActiveFilter('Unread')}
        >
          Unread
        </button>
        <button
          className={`filter-btn ${activeFilter === 'Read' ? 'active' : ''}`}
          onClick={() => setActiveFilter('Read')}
        >
          Read
        </button>
      </div>

      <div className="notifications-list">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-card ${notification.status}`}
            onClick={() => handleNotificationClick(notification.id)}
          >
            <div className="notification-icon">{notification.icon}</div>
            <div className="notification-content">
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
              <span className="notification-time">{notification.timestamp}</span>
            </div>
            {notification.status === 'new' && (
              <span className="notification-badge">New</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;