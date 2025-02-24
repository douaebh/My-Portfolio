// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Handle the contact form request
app.post("/api/contact", (req, res) => {
  // Forward the request to EmailJS from the frontend
  const { name, email, message } = req.body;

  // Validate form data (you can add more validation)
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // EmailJS sends email directly, so you don't need to handle it here.
  res.json({
    message: "Message successfully received, it will be sent via EmailJS",
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
