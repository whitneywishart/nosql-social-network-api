const { Schema, model } = require('mongoose');

// Schema to create a friend model
const friendSchema = new Schema(
  {
    friendName: {
      type: String,
      required: true,
    },
    inPerson: {
      type: Boolean,
      default: true,
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Friend = model('friend', friendSchema);

module.exports = Friend;
