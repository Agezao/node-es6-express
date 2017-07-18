const express = require('express'),
      userRoutes = require('./user.route'),
      authRoutes = require('./auth.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at api/user
router.use('/user', userRoutes);

// mount auth routes at api/
router.use('/', authRoutes);

module.exports = router;
