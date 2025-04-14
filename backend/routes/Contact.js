const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");


// POST route to save contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact message
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save to database
    await newContact.save();

    // Respond with success message
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

module.exports = router;
