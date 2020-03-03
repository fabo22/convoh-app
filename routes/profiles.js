const router = require('express').Router();
const profilesCtrl = require('../controllers/profiles');

router.post('/users/:id/profiles', profilesCtrl.show);

module.exports = router;