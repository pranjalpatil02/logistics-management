import React, { useState } from 'react';
import './Notifications.css';
import Sidebarrr from './Sidebarrr';

const Notification = () => {
  const [selectedType, setSelectedType] = useState('All Types');
  const [dateRange, setDateRange] = useState('Last 7 days');

  const notificationStats = [
    { title: 'Total Notifications', count: 24, icon: '🔔' },
    { title: 'Unread', count: 8, icon: '📫' },
    { title: 'Today', count: 12, icon: '📅' },
    { title: 'This Week', count: 42, icon: '📊' }
  ];

  const recentNotifications = [
    {
      id: 1,
      type: 'trip',
      title: 'New trip request approved',
      message: 'Your trip to London has been approved by the manager',
      time: '2 hours ago',
      isRead: false,
      icon: '✈️'
    },
    {
      id: 2,
      type: 'expense',
      title: 'Expense report processed',
      message: 'Your expense report #EXP-2024-001 has been processed',
      time: '3 hours ago',
      isRead: false,
      icon: '💰'
    },
    {
      id: 3,
      type: 'system',
      title: 'System maintenance notice',
      message: 'Scheduled maintenance on March 30, 2024',
      time: '1 day ago',
      isRead: true,
      icon: '🔧'
    }
  ];

  const notificationTypes = ['All Types', 'Trip Requests', 'Expense Reports', 'System Notices'];
  const dateRanges = ['Last 7 days', 'Today', 'This Week', 'This Month'];

  const handleMarkAllAsRead = () => {
    // Implementation for marking all notifications as read
    console.log('Marking all notifications as read');
  };

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <div className="header-left">
          <h1>Notifications</h1>
          <p>View and manage your notifications</p>
        </div>
        <button onClick={handleMarkAllAsRead} className="mark-all-btn">
          Mark All as Read
        </button>
      </div>
      <div className="sidebarrr">
           <Sidebarrr />
      </div>

      <div className="stats-grid">
        {notificationStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <div className="stat-count">{stat.count}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="notifications-list-container">
        <div className="list-header">
          <h2>Recent Notifications</h2>
          <div className="list-filters">
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="filter-select"
            >
              {notificationTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
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

        <div className="notifications-list">
          {recentNotifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`notification-item ${!notification.isRead ? 'unread' : ''}`}
            >
              <div className="notification-icon">{notification.icon}</div>
              <div className="notification-content">
                <div className="notification-title">{notification.title}</div>
                <div className="notification-message">{notification.message}</div>
                <div className="notification-time">{notification.time}</div>
              </div>
              {!notification.isRead && <div className="unread-indicator" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;