const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    index,
    new: newPost,
    create,
    show
};
function show(req, res) {
    Post.findById(req.params.id)
      .populate('displayName').exec(function(err, post) {
      User.find(
        {_id: {$nin: post.displayName}},
        function(err, users) {
          console.log(users);
          res.render('posts/show', {
            post, user: req.user
          });
        });
    });
  }

function create(req, res) {
    const post = {...req.body, user: req.user, username: req.user.name};
    Post.create(post, err => {
        if (err) return res.redirect('/posts');
        res.redirect('/posts');
    })
  }

function newPost(req, res) {
    Post.find({}, function(err, posts) {
        res.render('posts/new', { user: req.user, posts });
    });
}

function index(req, res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', { user: req.user, posts });
    });
}