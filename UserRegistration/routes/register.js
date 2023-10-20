import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = new User({ username, password });

    await user.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
