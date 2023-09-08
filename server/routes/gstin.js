const express = require('express');
const gstinController = require('../controllers/gstinController');

const router = express.Router();

// Define a route for searching GSTIN data by GSTIN number
router.get('/search/:gstin', gstinController.searchByGSTIN);

// Define a route for getting all GSTIN data
router.get('/all', gstinController.getAllGSTINs);

module.exports = router;
