const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true
    },

    email: {
      type: String,
      match: [/.+\@.+\..+/]
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }

);

const User = model('user', userSchema);

module.exports = User;

