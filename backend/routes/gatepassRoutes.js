const express = require("express");
const router = express.Router();
const Gatepass = require("../models/Gatepass");

// Create a new Gatepass entry
router.post("/add", async (req, res) => {
  try {
    const newGatepass = new Gatepass(req.body);
    await newGatepass.save();
    res.status(201).json({ message: "Gatepass added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all Gatepass entries
router.get("/all", async (req, res) => {
  try {
    const gatepasses = await Gatepass.find();
    res.status(200).json(gatepasses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;