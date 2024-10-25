const express = require('express');
const router = express.Router();
const { connectToDatabase, fetchTables, disconnectFromDatabase } = require('../controllers/dbController');

// Route to connect to the database
router.post('/connect', connectToDatabase);

// Route to fetch tables
router.get('/tables', fetchTables);

// Route to disconnect from the database
router.post('/disconnect', disconnectFromDatabase);

module.exports = router;
