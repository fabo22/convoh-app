const router = require('express').Router();
const postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.index);

module.exports = router;