const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionText: {
      type: String,
      // required: true,
      maxlength: 280
    },
    reactionCount: {
      type: Number,
      required: true,
      
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// const Reaction = model('Reaction', reactionSchema);

module.exports = reactionSchema;
