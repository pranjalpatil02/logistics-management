import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './TripChart.css';

const TripChart = () => {
  const data = [
    { day: 'Mon', trips: 3 },
    { day: 'Tue', trips: 4 },
    { day: 'Wed', trips: 3 },
    { day: 'Thu', trips: 5 },
    { day: 'Fri', trips: 2 },
    { day: 'Sat', trips: 2 },
    { day: 'Sun', trips: 4 }
  ];

  return (
    <div className="trip-chart">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="trips"
            stroke="#2196f3"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TripChart;