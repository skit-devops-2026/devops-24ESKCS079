import dns from 'node:dns';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.js';
import healthRoutes from './routes/health.js';

// Configure DNS before connecting to MongoDB Atlas
dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express();

app.disable('x-powered-by');

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  })
);

app.use(express.json({ limit: '20kb' }));

// API status endpoint
app.get('/api', (_req, res) => {
  res.json({
    service: 'MEDCARE++ API',
    status: 'running',
  });
});

// Application routes
app.use('/api/auth', authRoutes);
app.use('/api/health', healthRoutes);

// Error-handling middleware
app.use((err, _req, res, _next) => {
  console.error(err);

  res.status(500).json({
    message: 'Internal server error.',
  });
});

const port = Number(process.env.PORT || 5000);

try {
  const mongoUri =
    process.env.MONGODB_URI ||
    'mongodb://127.0.0.1:27017/medcare_plus_plus';

  await mongoose.connect(mongoUri);

  console.log('MongoDB connected');

  app.listen(port, () => {
    console.log(`MEDCARE++ API listening on ${port}`);
  });
} catch (error) {
  console.error('MongoDB connection failed:', error.message);
  process.exit(1);
}