const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    create
}

function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        const comment = {...req.body, user: req.user, username: req.user.name};
        post.comments.push(comment);
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`); 
        });
    });
}
