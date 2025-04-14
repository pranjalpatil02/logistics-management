const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const ManagerExpense = require("../models/ManagerExpense");

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/receipts"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// POST route
router.post("/", upload.single("receipt"), async (req, res) => {
  try {
    console.log("📝 Form:", req.body);
    console.log("📎 File:", req.file);

    const { title, category, amount, date, description } = req.body;

    const expense = new ManagerExpense({
      title,
      category,
      amount: parseFloat(amount),
      date,
      description,
      receiptUrl: req.file ? `/uploads/receipts/${req.file.filename}` : "",
      createdByRole: "manager"
    });

    await expense.save();
    res.status(201).json({ message: "✅ Expense created", data: expense });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

module.exports = router;
