const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactionSchema = new Schema ({
  liked: Boolean
}, {
  timestamps: true
});

const commentSchema = new Schema ({
  content: {
    type: String,
    required: true
  },
  createdBy: Schema.Types.ObjectId
}, {
  timestamps: true
});

const postSchema = new Schema({
  title: {
      type: String,
      required: true
    },
  content: {
      type: String,
      required: true
  },
  displayName: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tag: String,
  googleId: String,
  comments: [commentSchema],
  reactions: [reactionSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);