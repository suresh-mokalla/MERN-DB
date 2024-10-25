const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./config/db.js');
const dbRoutes = require ('./routes/dbRoutes.js');
const cors = require ('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
dbConnection();

// Routes
app.use('/api/db', dbRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
