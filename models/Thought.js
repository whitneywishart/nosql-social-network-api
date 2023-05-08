const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(

  {
    thoughtText: {
      type: String,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  },

  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtSchema;

