const router = require('express').Router();

const {
    getUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    createFriend,
    deleteFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUsers);

router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

router.route('/:id/friends/:friendId').post(createFriend).delete(deleteFriend);

module.exports = router;