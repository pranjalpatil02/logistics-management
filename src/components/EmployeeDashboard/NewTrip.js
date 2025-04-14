import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const NewTrip = () => {
  const [tripData, setTripData] = useState({
    from: "",
    to: "",
    startDate: "",
    endDate: "",
    purpose: "",
    notes: "",
  });

  const handleChange = (e) => {
    setTripData({ ...tripData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tripData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Trip created successfully!");
        setTripData({
          from: "",
          to: "",
          startDate: "",
          endDate: "",
          purpose: "",
          notes: "",
        });
      } else {
        alert(`❌ Failed to create trip: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting trip:", error);
      alert("❌ Server error. Try again later.");
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: "30px", margin: "20px" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Create New Trip
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          display="grid"
          gap="20px"
          gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          <TextField
            label="From"
            name="from"
            value={tripData.from}
            onChange={handleChange}
            required
          />
          <TextField
            label="To"
            name="to"
            value={tripData.to}
            onChange={handleChange}
            required
          />
          <TextField
            label="Start Date"
            type="date"
            name="startDate"
            value={tripData.startDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="End Date"
            type="date"
            name="endDate"
            value={tripData.endDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Purpose"
            name="purpose"
            value={tripData.purpose}
            onChange={handleChange}
            required
          />
          <TextField
            label="Notes"
            name="notes"
            value={tripData.notes}
            onChange={handleChange}
            multiline
            rows={3}
          />
        </Box>

        <Box mt={4}>
          <Button type="submit" variant="contained" color="primary">
            Submit Trip
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default NewTrip;
