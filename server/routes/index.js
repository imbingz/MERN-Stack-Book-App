const router = require('express').Router();
const books = require('./book.routes');

//api/todo route
router.use('/api/books', books);

module.exports = router;