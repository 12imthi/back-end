import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/config.js'; // Import your DB connection
import userRoutes from './Routers/userRouter.js';
import tripRoutes from './Routers/tripRouter.js'

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Set up routes
app.use('/api/users', userRoutes);
app.use('/api/trips', tripRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
