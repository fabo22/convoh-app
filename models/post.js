const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  googleId: String,
  comments: [],
  reactions: []
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);