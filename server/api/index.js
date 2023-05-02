const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/products', require('./products'));

router.use((req, res, next) => {
  const err = new Error('404 was not found');
  err.status = 404;
  next(err);
});

module.exports = router;
