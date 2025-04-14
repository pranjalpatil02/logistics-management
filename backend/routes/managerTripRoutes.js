// routes/managerTripRoutes.js
const express = require("express");
const router = express.Router();
const ManagerTrip = require("../models/ManagerTrip");

// @route   POST /api/manager/trips
// @desc    Create a new manager trip
router.post("/", async (req, res) => {
  try {
    const {
      from,
      to,
      startDate,
      endDate,
      purpose,
      budget,
      notes,
    } = req.body;

    const newTrip = new ManagerTrip({
      from,
      to,
      startDate,
      endDate,
      purpose,
      budget,
      notes,
      createdByRole: "manager",
    });

    await newTrip.save();
    res.status(201).json({ message: "✅ Trip created", data: newTrip });
  } catch (err) {
    console.error("❌ Error creating manager trip:", err);
    res.status(500).json({ error: "Server error while creating trip" });
  }
});

module.exports = router;
