const { Thoughts, Users } = require('../models');

const thoughtController = {

    // Create thought
    createThoughts({ params, body }, res) {
        Thoughts.create(body)
            .then(({ _id }) => {
                return Users.findOneAndUpdate({ _id: params.userId }, { $push: { thoughts: _id } }, { new: true });
            })
            .then(thoughtDocuments => {
                if (!thoughtDocuments) {
                    res.status(404).json({ message: 'No thought found' });
                    return;
                }
                res.json(thoughtDocuments)
            })
            .catch(err => res.json(err));
    },

    // Get thoughts
    getThoughts(req, res) {
        Thoughts.find({})
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(thoughtDocuments => res.json(thoughtDocuments))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Get thought by id
    getThoughtsById({ params }, res) {
        Thoughts.findOne({ _id: params.id })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(thoughtDocuments => {
                if (!thoughtDocuments) {
                    res.status(404).json({ message: 'Thought Not Found' });
                    return;
                }
                res.json(thoughtDocuments)
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // Update thought by id
    updateThoughts({ params, body }, res) {
        Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(thoughtDocuments => {
                if (!thoughtDocuments) {
                    res.status(404).json({ message: 'Thought Not Found' });
                    return;
                }
                res.json(thoughtDocuments);
            })
            .catch(err => res.json(err));
    },

    // Add reaction
    addReaction({ params, body }, res) {
        Thoughts.findOneAndUpdate({ _id: params.thoughtId }, { $push: { reactions: body } }, { new: true, runValidators: true })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(thoughtDocuments => {
                if (!thoughtDocuments) {
                    res.status(404).json({ message: 'Thought Not Found' });
                    return;
                }
                res.json(thoughtDocuments);
            })
            .catch(err => res.status(400).json(err))
    },

    // Delete thought by id
    deleteThoughts({ params }, res) {
        Thoughts.findOneAndDelete({ _id: params.id })
            .then(thoughtDocuments => {
                if (!thoughtDocuments) {
                    res.status(404).json({ message: 'Thought Not Found' });
                    return;
                }
                res.json(thoughtDocuments);
            })
            .catch(err => res.status(400).json(err));
    },

    // Delete reaction by id
    deleteReaction({ params }, res) {
        Thoughts.findOneAndUpdate({ _id: params.thoughtId }, { $pull: { reactions: { reactionId: params.reactionId } } }, { new: true })
            .then(thoughtDocuments => {
                if (!thoughtDocuments) {
                    res.status(404).json({ message: 'Thought Not Found' });
                    return;
                }
                res.json(thoughtDocuments);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = thoughtController;