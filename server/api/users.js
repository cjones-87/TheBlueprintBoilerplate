const { User } = require('../db');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/me', async (req, res, next) => {
  try {
    const token = await req.headers.authorization;
    const user = await User.findByToken(token);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(+req.params.userId);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const createdUser = await User.create({ ...req.body });
    res.status(201).json(createdUser);
  } catch (error) {
    console.log('error creating single user');
    next(error);
  }
});

router.put('/:userId', async (req, res, next) => {
  try {
    const userBeingUpdated = await User.findByPk(+req.params.userId);
    const wasUpdated = await userBeingUpdated.update({ ...req.body });
    res.json(wasUpdated);
  } catch (error) {
    console.log('error updating single user');
    next(error);
  }
});

router.delete('/:userId', async (req, res, next) => {
  try {
    const userBeingDeleted = await User.findByPk(+req.params.userId);
    const wasDeleted = await userBeingDeleted.destroy({ ...req.body });
    res.json(wasDeleted);
  } catch (error) {
    console.log('error deleting single user');
    next(error);
  }
});

module.exports = router;
