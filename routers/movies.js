// importo express
const express = require('express');
const router = express.Router();

// importo il controller
const moviesControllers = require('../controllers/movieControllers');

// importo il middleware multer per l'upload delle immagini
const upload = require('../middlewares/multer');

// INDEX - lista tutti i film
router.get('/', moviesControllers.index);

// SHOW - dettaglio di un singolo film
router.get('/:id', moviesControllers.show);

// POST - salva una nuova recensione
router.post('/', moviesControllers.store);

module.exports = router;
