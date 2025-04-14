const mongoose = require("mongoose");

const managerExpenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  description: { type: String },
  receiptUrl: { type: String },
  createdByRole: { type: String, default: "manager" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ManagerExpense", managerExpenseSchema);
