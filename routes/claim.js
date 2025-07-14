import express from 'express';
import User from '../models/User.js';
import History from '../models/History.js';
const router = express.Router();

// Claim points for a user
router.post('/:userId', async (req, res) => {
  const { userId } = req.params;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.totalPoints += points;
  await user.save();

  const history = new History({ userId, points });
  await history.save();

  res.json({ points });
});

export default router;
