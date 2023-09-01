const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint
app.get("/fetch-data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.mastergst.com/public/search",
      {
        params: {
          email: process.env.EMAIL,
          gstin: process.env.GSTIN,
        },
        headers: {
          client_id: process.env.CLIENTID,
          client_secret: process.env.CLIENTSECRET,
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
