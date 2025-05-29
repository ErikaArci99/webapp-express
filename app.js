console.log('hello world');

// importo express e lo inizializzo
const express = require('express');
const app = express();

// importo dotenv
const dotenv = require('dotenv');

// uso dotenv
dotenv.config();

// definisco la porta
const port = process.env.SERVER_PORT || 3000;

// importo i middleware
const imagePath = require('./middlewares/imagePath');
const notFound = require('./middlewares/notFound');

// uso il middleware per gli asset statici generici (es. CSS, JS)
app.use(express.static('public'));

// uso il middleware per servire immagini da /public/img
app.use('/img', express.static('public/img'));

// uso il middleware per parsare il body json
app.use(express.json());

// uso il middleware custom per settare req.imagePath (prima delle rotte)
app.use(imagePath);

// importo il router
const movieRouter = require('./routers/movies');

// rotte
app.use('/movies', movieRouter);

// entrypoint principale
app.get("/", (req, res) => {
    res.send('movies api server');
});

// middleware per gestire tutte le rotte non trovate (404)
app.use(notFound);

// dico al server di rimanere in ascolto sulla porta
app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`);
});
