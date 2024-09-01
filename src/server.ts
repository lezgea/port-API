import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/users', require('./routes/auth').default);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
