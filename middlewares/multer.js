const multer = require('multer');

// configurazione dello storage
const storage = multer.diskStorage({
    destination: './public/imgs', // cartella dove salvare le immagini
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName); // salva con nome univoco
    }
});

// esporta il middleware
const upload = multer({ storage });

module.exports = upload;
