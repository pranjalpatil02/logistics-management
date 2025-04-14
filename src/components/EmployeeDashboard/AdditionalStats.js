import React from 'react';
import StatBox from './StatBox';
import './AdditionalStats.css';

const AdditionalStats = () => {
  const additionalStats = {
    completedTrips: { value: 15, icon: '✅' },
    fuelConsumption: { value: '450L', icon: '⛽' },
    averageSpeed: { value: '65 km/h', icon: '⚡' },
    totalDrivers: { value: 8, icon: '👥' }
  };

  return (
    <div className="additional-stats">
      <h3>Additional Statistics</h3>
      <div className="stats-grid">
        <StatBox title="Completed Trips" {...additionalStats.completedTrips} />
        <StatBox title="Fuel Consumption" {...additionalStats.fuelConsumption} />
        <StatBox title="Average Speed" {...additionalStats.averageSpeed} />
        <StatBox title="Total Drivers" {...additionalStats.totalDrivers} />
      </div>
    </div>
  );
};

export default AdditionalStats;