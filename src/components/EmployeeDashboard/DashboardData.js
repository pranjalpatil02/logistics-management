// Dashboard statistics data
export const stats = {
  activeTrips: {
    value: 3,
    icon: '🚗',
    trend: 'up',
    percentage: 12
  },
  pendingApprovals: {
    value: 2,
    icon: '⏳',
    trend: 'down',
    percentage: 8
  },
  totalDistance: {
    value: '1,234 km',
    icon: '📍',
    trend: 'up',
    percentage: 15
  },
  totalExpenses: {
    value: '$2,845',
    icon: '💰',
    trend: 'up',
    percentage: 10
  }
};

export const activities = [
  {
    id: 1,
    type: 'Trip to Chicago',
    distance: '450 km',
    status: 'Completed',
    date: '2024-03-13'
  },
  {
    id: 2,
    type: 'Expense Submission',
    amount: '$345.00',
    status: 'Pending',
    date: '2024-03-14'
  },
  {
    id: 3,
    type: 'Trip Request Approved',
    route: 'New York - Boston',
    status: 'Approved',
    date: '2024-03-15'
  }
];

export const routeInfo = {
  start: 'Nadiad',
  end: 'Anand',
  distance: '22 km',
  estimatedTime: '30m',
  status: 'In Progress',
  milestones: [
    {
      location: 'Nadiad',
      time: '08:00 AM',
      status: 'Completed'
    },
    {
      location: 'Anand',
      time: '08:30 AM',
      status: 'Pending'
    }
  ]
};