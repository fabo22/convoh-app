const router = require('express').Router();
const postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.index);
router.get ('/new', postsCtrl.new);
router.get('/:id', isLoggedIn, postsCtrl.show);
router.post('/', isLoggedIn, postsCtrl.create);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;