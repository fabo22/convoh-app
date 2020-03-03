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
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    const post = new Post(req.body);
    post.save(function(err) {
      // one way to handle errors
      if (err) return res.redirect('/posts/new');
       res.redirect('/posts');
    //   res.redirect(`/posts/${post._id}`);
    });
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