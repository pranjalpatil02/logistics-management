const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Assign role based on email syntax
    const role = email.includes("employee@techelecon.com") ? "employee" : "manager";

    user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ success: true, msg: "User registered successfully" });

  } catch (err) {
    console.error("Error in /register:", err.message);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid email or password" });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid email or password" });

    // Generate JWT token with user role
    const payload = { user: { id: user.id, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Send token + role to frontend
    res.json({ success: true, token, role: user.role });

  } catch (err) {
    console.error("Error in /login:", err.message);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

module.exports = router;
