
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

// Prefix all routes defined in `bookRoutes.js` with `/books
router.use('/home', homeRoutes);

module.exports = router;