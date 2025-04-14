const mongoose = require("mongoose");

const GatepassSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  purpose: { type: String, required: true },
  otherPurpose: { type: String },
  companyPlace: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Gatepass", GatepassSchema);