const router = require('express').Router();
const { User } = require('../db');

router.post('/login', async (req, res, next) => {
  try {
    res.json({ token: await User.authenticate(req.body) });
  } catch (error) {
    console.log('Error logging in');
    next(error);
  }
});

router.post('/registration', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = await user.generateToken();
    res.json({ token, user });
  } catch (error) {
    error.name === 'SequelizeUniqueConstraintError'
      ? res.status(401).json('This user already exists')
      : next(error);
  }
});

module.exports = router;
