const router = require('express').Router();
const { User } = require('../db');

router.post('/login', async (req, res, next) => {
  try {
    const { identifier, password } = req.body;
    const token = await User.authenticate({ identifier, password });
    const user = await User.findByToken(token);
    res.json({ token, user });
  } catch (error) {
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
