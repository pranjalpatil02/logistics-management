const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();

// Ensure uploads/receipts folder exists
const uploadPath = path.join(__dirname, "uploads", "receipts");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
  console.log("📁 Created uploads/receipts folder");
}

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");
const gatepassRoutes = require("./routes/gatepassRoutes");
const tripRoutes = require("./routes/tripRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const managerTripRoutes = require("./routes/managerTripRoutes");
const managerExpenseRoutes = require("./routes/managerExpenseRoutes"); // ✅

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
    process.exit(1);
  });

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/gatepass", gatepassRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/manager/trips", managerTripRoutes);
app.use("/api/manager/expenses", managerExpenseRoutes); // ✅

app.get("/", (req, res) => {
  res.send("✅ Backend is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
