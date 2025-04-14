import React from 'react';
import './ActivityTable.css';

const ActivityTable = ({ activities }) => {
  return (
    <div className="activity-table">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.type}</td>
              <td>
                {activity.distance && `Distance: ${activity.distance}`}
                {activity.amount && `Amount: ${activity.amount}`}
                {activity.route && `Route: ${activity.route}`}
              </td>
              <td>
                <span className={`status ${activity.status.toLowerCase()}`}>
                  {activity.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;