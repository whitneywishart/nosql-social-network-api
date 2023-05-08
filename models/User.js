const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true,
      // required: true,
      trim: true
    },

    email: {
      type: String,
      // required: true,
      // unique: true,
      match: [/.+\@.+\..+/]
    },
    thoughts: [thoughtSchema],

  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('User', userSchema);

module.exports = User;
