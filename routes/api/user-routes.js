const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// Set up GET and POST routes for /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/')
    .get(getUsersById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;