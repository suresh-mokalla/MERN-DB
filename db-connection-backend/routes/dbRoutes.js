const express = require('express');
const {
  getAllUsers,
  createUser,
} = require('../controllers/dbController'); // Import the controller functions
const router = express.Router(); // Create a new router

// GET /api/db/users - Fetch all users
router.get('/users', getAllUsers);

// POST /api/db/users - Create a new user
router.post('/users', createUser);

// Export the router
module.exports = router;
