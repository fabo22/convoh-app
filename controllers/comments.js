const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    create
}

function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`); 
        });
    });
}