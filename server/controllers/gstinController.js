const GSTIN = require("../models/GSTIN");

// Controller function to search for GSTIN data by GSTIN number
exports.searchByGSTIN = async (req, res) => {
  try {
    const { gstin } = req.params;

    // Find the GSTIN data in the database
    const gstinData = await GSTIN.findOne({ gstin });

    if (!gstinData) {
      // If GSTIN data is not found, return a 404 error
      return res.status(404).json({ error: "GSTIN not found" });
    }

    // If GSTIN data is found, return it as JSON response
    res.json(gstinData);
  } catch (error) {
    // Handle any errors that occur during the search
    console.error("Error searching for GSTIN:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllGSTINs = async (req, res) => {
  try {
    // Find all GSTIN data in the database, only select the 'gstin' field
    const allGSTINs = await GSTIN.find({}, "gstin");

    // If no GSTIN data is found, return a 404 error
    if (!allGSTINs || allGSTINs.length === 0) {
      return res.status(404).json({ error: "No GSTIN data found" });
    }

    // Extract just the 'gstin' field from the records and return it as JSON response
    const gstinValues = allGSTINs.map((item) => item.gstin);
    res.json(gstinValues);
  } catch (error) {
    // Handle any errors that occur during the retrieval
    console.error("Error getting all GSTINs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
