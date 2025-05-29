console.log('hello world');

//importo express e lo inizializzo
const express = require('express');
const app = express();

//importo dotenv
const dotenv = require('dotenv')

//uso dotenv
dotenv.config();

//definisco la porta
const port = process.env.SERVER_PORT || 3000;

//uso il middleware per gli asset statici
app.use(express.static('public'));

//uso il middleware per il parsing del body delle richieste
app.use(express.json());

//importo il router
const movieRouter = require('./routers/movies')

// rotte
app.use('/movies', movieRouter)

//definisco un entrypoint
app.get("/", (req, res) => {
    res.send('movies api server')
})

//dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`)
})