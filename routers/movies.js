// importo express
const express = require('express');
const router = express.Router();

//importiamo il controller
<<<<<<< HEAD
const moviesControllers = require('../controllers/movieControllers');
=======
const movieControllers = require('../controllers/movieControllers');
>>>>>>> a892faf49ca459a0bdf6c823d01162795500fad4

// INDEX 
router.get('/', moviesControllers.index);

// SHOW 
router.get('/:id', moviesControllers.show);

module.exports = router;