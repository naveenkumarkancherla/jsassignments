import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Check if the provided password matches the stored password (without hashing)
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Passwords match, so send a success response
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
