console.log('hello world');

//importo express e lo inizializzo
const express = require('express');
const app = express();

//definisco la porta
const port = 3000;

//uso il middleware per gli asset statici
app.use(express.static('public'));

//uso il middleware per il parsing del body delle richieste
app.use(express.json());

//definisco un entrypoint
app.get("/", (req, res) => {
    res.send('books api server')
})

//dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
    console.log(`server n ascolto sulla porta ${port}`)
})