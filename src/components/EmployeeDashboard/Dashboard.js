import React, { useState } from 'react';
import StatBox from './StatBox';
//import TripChart from './TripChart';
import ActivityTable from './ActivityTable';
import CurrentRoute from './CurrentRoute';
//import AdditionalStats from './AdditionalStats';
import NewTrip from './NewTrip';
import NewExpense from './NewExpense';
import CurrentTripModal from './CurrentTripModal';
import { stats, activities, routeInfo } from './DashboardData';
import { jsPDF } from 'jspdf';
import './Dashboard.css';
import Sidebarr from './Sidebarr';

const Dashboard = () => {
  const [showNewTripModal, setShowNewTripModal] = useState(false);
  const [showNewExpenseModal, setShowNewExpenseModal] = useState(false);
  const [showCurrentTripModal, setShowCurrentTripModal] = useState(false);

  const handleCreateTrip = (tripData) => {
    // TODO: Implement trip creation logic
    console.log('New trip:', tripData);
  };

  const handleCreateExpense = (expenseData) => {
    // Create PDF report
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(16);
    doc.text('Expense Report', 20, 20);
    
   // Add expense details
doc.setFontSize(12);
doc.text(`Title: ${expenseData.get('title')}`, 20, 40);
doc.text(`Date: ${expenseData.get('date')}`, 20, 50);
doc.text(`Amount: $${expenseData.get('amount')}`, 20, 60);
doc.text(`Category: ${expenseData.get('category')}`, 20, 70);

    
    // Save the PDF
    doc.save('expense-report.pdf');
    
    // Close modal
    setShowNewExpenseModal(false);
  };
  return (
    <>
      <div className="welcome-section">
        <h2>Welcome back, John</h2>
        <p>Here's what's happening with your trips</p>
      </div>

      <div className="stats-grid">
        <StatBox title="Active Trips" {...stats.activeTrips} />
        <StatBox title="Pending Approvals" {...stats.pendingApprovals} />
        <StatBox title="Total Distance" {...stats.totalDistance} />
        <StatBox title="Total Expenses" {...stats.totalExpenses} />
      </div>

      <div className="main-content">
        <div className="activities-section">
          <h3>Recent Activities</h3>
          <ActivityTable activities={activities} />
        </div>
        <div className="sidebarr">
           <Sidebarr />
        </div>
        <div className="side-content">
          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <button className="primary-btn" onClick={() => setShowNewTripModal(true)}>+ New Trip Request</button>
            {showNewTripModal && (
              <NewTrip
                onClose={() => setShowNewTripModal(false)}
                onCreateTrip={handleCreateTrip}
              />
            )}
            <button className="secondary-btn" onClick={() => setShowNewExpenseModal(true)}>Submit Expense</button>
            {showNewExpenseModal && (
              <NewExpense
                onClose={() => setShowNewExpenseModal(false)}
                onCreateExpense={handleCreateExpense}
              />
            )}
            <button className="secondary-btn" onClick={() => setShowCurrentTripModal(true)}>View Current Trip</button>
            {showCurrentTripModal && (
              <CurrentTripModal
                onClose={() => setShowCurrentTripModal(false)}
              />
            )}
          </div>

          <div className="current-route">
            <h3>Current Route</h3>
            <CurrentRoute {...routeInfo} />
          </div>
        </div>
      </div>

      {/* <AdditionalStats /> */}
    </>
  );
};

export default Dashboard; 