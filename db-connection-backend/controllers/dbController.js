const User = require('../models/userModel'); // Import the User model

// Controller to fetch all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users); // Return users as JSON
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to create a new user
const createUser = async (req, res) => {
  const {id, name, email } = req.body;

  try {
    const newUser = new User({id, name, email });
    await newUser.save(); // Save the new user to the database
    res.status(201).json(newUser); // Return the created user
  } catch (error) {
    console.error('Error creating user:', error);
    if (error.code === 11000) {
      // Handle duplicate email error
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Export the controller functions
module.exports = {
  getAllUsers,
  createUser,
};
