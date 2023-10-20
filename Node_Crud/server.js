import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import taskRoutes from './api/product.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const uri = 'mongodb://0.0.0.0:27017/node_crud';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connected');
});

// Use product routes
app.use('/api/v1/products', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});