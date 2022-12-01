
const router = require('express').Router();
const characterRoutes = require('./characterRoutes');

// Prefix all routes defined in `bookRoutes.js` with `/books
router.use('/users', characterRoutes);

module.exports = router;