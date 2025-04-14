import React from 'react';
import './StatBox.css';

const StatBox = ({ title, value, icon }) => {
  return (
    <div className="stat-box">
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <h4 className="stat-title">{title}</h4>
        <div className="stat-value">{value}</div>
      </div>
    </div>
  );
};

export default StatBox;