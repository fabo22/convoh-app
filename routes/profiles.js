const router = require('express').Router();
const profilesCtrl = require('../controllers/users');

// GET /users
router.get('/', profilesCtrl.index);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;