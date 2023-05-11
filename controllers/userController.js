const { Users } = require('../models');

const userController = {

    // Create user
    createUsers(req, res) {
        Users.create(req.body)
            .then(userDocuments => res.json(userDocuments))
            .catch(err => res.status(400).json(err));
    },

    // Get users
    getUsers(req, res) {
        Users.find({})
            .populate({ path: 'thoughts', select: '-__v' })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(userDocuments => res.json(userDocuments))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Get user by id
    getUsersById({ params }, res) {
        Users.findOne({ _id: params.id })
            .populate({ path: 'thoughts', select: '-__v' })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(userDocuments => {
                if (!userDocuments) {
                    res.status(404).json({ message: 'No User found' });
                    return;
                }
                res.json(userDocuments)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    // Update user by id
    updateUsers({ params, body }, res) {
        Users.findOneAndUpdate(
            { _id: params.id }, body, { new: true, runValidators: true })
            .then(userDocuments => {
                if (!userDocuments) {
                    res.status(404).json({ message: 'No User found' });
                    return;
                }
                res.json(userDocuments);
            })
            .catch(err => res.json(err))
    },

    // Delete user by id
    deleteUsers({ params }, res) {
        Users.findOneAndDelete({ _id: params.id })
            .then(userDocuments => {
                if (!userDocuments) {
                    res.status(404).json({ message: 'No User found' });
                    return;
                }
                res.json(userDocuments);
            })
            .catch(err => res.status(400).json(err));
    },

    // Add friend to user by id
    createFriend({ params }, res) {
        Users.findOneAndUpdate({ _id: params.id }, { $push: { friends: params.friendId } }, { new: true })
            .populate({ path: 'friends', select: ('-__v') })
            .select('-__v')
            .then(userDocuments => {
                if (!userDocuments) {
                    res.status(404).json({ message: 'No User found' });
                    return;
                }
                res.json(userDocuments);
            })
            .catch(err => res.json(err));
    },

    // Delete friend
    deleteFriend({ params }, res) {
        Users.findOneAndUpdate({ _id: params.id }, { $pull: { friends: params.friendId } }, { new: true })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(userDocuments => {
                if (!userDocuments) {
                    res.status(404).json({ message: 'No User found' });
                    return;
                }
                res.json(userDocuments);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = userController;