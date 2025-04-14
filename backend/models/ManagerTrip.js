// models/ManagerTrip.js
const mongoose = require("mongoose");

const managerTripSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  purpose: { type: String, required: true },
  budget: { type: Number, required: true },
  notes: { type: String },
  createdByRole: {
    type: String,
    default: "manager",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ManagerTrip", managerTripSchema);
