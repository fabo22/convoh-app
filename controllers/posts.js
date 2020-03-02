const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    index
};

function index(req, res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', { user: req.user, posts });
    });
}