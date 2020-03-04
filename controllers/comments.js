const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    create,
    delete: deleteComment,
    update
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

function deleteComment(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    Post.findOne({'comments._id': req.params.id}, function(err, post) {
      const comment = post.comments.id(req.params.id);
      if (!comment.user.equals(req.user && req.user._id)) return res.redirect(`/posts/${post._id}`);
      comment.remove();
      post.save(function(err) {
        res.redirect(`/posts/${post._id}`);
      });
    });
  }

  function update(req, res) {
    Post.findOne({ 'comments._id': req.params.id }, function(err, post) {
        const comment = post.comments.id(req.params.id);
        if (!comment.user.equals(req.user && req.user._id)) return res.redirect(`/posts/${post._id}`);
        comment.content = req.body.content;
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`);
        })
    });
}