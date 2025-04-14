// backend/models/Trip.js
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  purpose: { type: String, required: true },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trip', tripSchema);
