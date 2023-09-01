const express = require("express");
const axios = require("axios");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB setup
mongoose.connect("mongodb+srv://riteshshukla:riteshshukla@cluster0.fo6fefn.mongodb.net/gst", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// API Endpoint
app.get("/fetch-data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.mastergst.com/public/search",
      {
        params: {
          email: "pritampritamhalder@gmail.com",
          gstin: "33AAGCC7144L6ZE",
        },
        headers: {
          client_id: "a207fac9-e0fb-4f4e-83e4-e6e02f6eefda",
          client_secret: "6a89e98b-ae2d-4221-b54a-254e52de07c7",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
