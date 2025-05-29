//importiamo il controller

const movieControllers = require('../controllers/movieControllers');

// INDEX 
router.get('/', movieControllers.index);

// SHOW 
router.get('/:id', movieControllers.show);

module.exports = router;