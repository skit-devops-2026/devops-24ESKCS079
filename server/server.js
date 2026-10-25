const express = require("express");
const cors = require("cors");
require("dotenv").config();
const patientRoutes = require("./routes/patients");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/patients", patientRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the MEDCARE++ API",
  });
});

// Health-check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "healthy",
    application: "MEDCARE++",
    timestamp: new Date().toISOString(),
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`MEDCARE++ API running at http://localhost:${PORT}`);
});