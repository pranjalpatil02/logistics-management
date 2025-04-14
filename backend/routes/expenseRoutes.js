// routes/expenses.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/receipts'); // folder to store uploads
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Your route
router.post('/api/expenses', upload.single('receipt'), async (req, res) => {
  try {
    const { title, date, amount, category } = req.body;
    const receiptPath = req.file ? req.file.path : null;

    // TODO: Save to DB
    console.log({ title, date, amount, category, receiptPath });

    res.status(201).json({ message: '✅ Expense created successfully!' });
  } catch (err) {
    console.error('❌ Backend error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
