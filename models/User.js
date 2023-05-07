const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');
const friendSchema = require('./Friend');
const reactionSchema = require('./Reaction');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      // unique: true,
      match: [/.+\@.+\..+/]
    },

    thoughts: [thoughtSchema],
    friends: [friendSchema],
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);
module.exports = User;
