const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      console.log("+++++++++++++++++++++++++++++++++++++++++++++")
console.log("Getting thoruhgs")
      console.log("+++++++++++++++++++++++++++++++++++++++++++++")
      const thoughtz = await Thought.find({})
      res.json(thoughtz);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },


  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await User.findOne({ _id: req.params.thoughtId })
        .select('thoughts');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' })
      }

      res.json({
        thought
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },


  // create a new thought
  async createThought(req, res) {
    try {
      //username and a thoughttext
      const newThought = await Thought.create(req.body)
      try{
        const user = await User.findOneAndUpdate({ username: req.body.username }, {
          $push: { thoughts: newThought._id }
        })
        console.log(user)
        res.json(user);
        return
      } catch(error) {
        console.log(error)
        console.log("This is because the user didn't exist with that username")
        await Thought.deleteOne({_id: newThought._id})
        res.status(400).json(error)
      }
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  // Update a thought
  async updateThought(req, res) {
    try {
      const updatedThought = await User.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });

      if (!updatedThought) {
        return res.status(404).json({ message: 'No thought found with that ID' });
      }

      res.json(updatedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Delete a thought and remove it from the user
  async deleteThought(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }

      const thought = await User.findOneAndUpdate(
        { users: req.params.userId },
        { $pull: { users: req.params.userId } },
        { new: true }
      );


      res.json({ message: 'Thought successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Remove thought from a user
  async removeThought(req, res) {
    try {
      const thought = await User.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { thoughts: { thoughtId: req.params.thoughtId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },


  // Add a friend to a thought
  async addFriend(req, res) {
    console.log('Adding a friend');
    console.log(req.body);

    try {
      const thought = await User.findOneAndUpdate(
        { _id: req.params.friendId },
        { $addToSet: { friends: req.body } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res
          .status(404)
          .json({ message: 'No friend found with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove friend from a thought
  async removeFriend(req, res) {
    try {
      const thought = await User.findOneAndUpdate(
        { _id: req.params.friendId },
        { $pull: { friend: { friendId: req.params.friendId } } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res
          .status(404)
          .json({ message: 'No friend found with that ID' });
      }

      res.json(friend);
    } catch (err) {
      res.status(500).json(err);
    }
  },

};