// backend/routes/tripRoutes.js
const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');

// POST /api/trips – Create new trip
router.post('/', async (req, res) => {
  try {
    const newTrip = new Trip(req.body);
    await newTrip.save();
    res.status(201).json({ message: 'Trip created successfully', trip: newTrip });
  } catch (error) {
    res.status(500).json({ error: 'Error creating trip', details: error.message });
  }
});

// (Optional) GET /api/trips – Get all trips
router.get('/', async (req, res) => {
  try {
    const trips = await Trip.find().sort({ createdAt: -1 });
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching trips' });
  }
});

module.exports = router;
