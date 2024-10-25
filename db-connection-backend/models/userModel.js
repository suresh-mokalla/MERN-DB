// models/userModel.js
const mongoose = require('mongoose');

// Define the User schema with ID, name, and email
const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
