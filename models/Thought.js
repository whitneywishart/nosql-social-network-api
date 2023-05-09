const { Schema, model } = require('mongoose');

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },

  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },

    id: false
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  })


const Thought = model('thought', thoughtSchema);

module.exports = Thought;