const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/', userRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>404 Error!</h1>');
})

module.exports = router;