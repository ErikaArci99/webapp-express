//importo mysql2
const myswl = require('mysql2');

//creo la connessione al db
const connection = mysql.createConnection({
    host: "",
    port: "",
    user: "",
    password: "",
    database: ""
})

//effettuo la connessione
connection.connect((err) => {
    if (err) {
        console.log("errore to connect to my sql:" + err)
    }
    else {
        console.lg("connected to my sql")
    }
})

//esporto la variabile connection
module.exports = connection