import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import claimRoutes from './routes/claim.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/claim', claimRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(5001, () => console.log('Server running on port 5001'));
}).catch(err => console.error(err));
