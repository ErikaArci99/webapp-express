// importo express
const express = require('express');
const router = express.Router();

//importiamo il controller
const moviesControllers = require('../controllers/movieControllers');

// INDEX 
router.get('/', moviesControllers.index);

// SHOW 
router.get('/:id', moviesControllers.show);

module.exports = router;