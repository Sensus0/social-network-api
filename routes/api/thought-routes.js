// Require express router
const router = require('express').Router();

// Set requirements (from thoughts-controller)
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');

// GET Route: /api/thoughts 
router.route('/').get(getAllThoughts).post(createThoughts);

// GET, PUT, DELETE Routes: /api/thoughts/:id
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 

// POST Route: /api/thoughts/:thoughtId/reactions 
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE Route: /api/thoughts/:thoughtId/reactionId 
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Export module router
module.exports = router;