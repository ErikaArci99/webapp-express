// middleware per la gestione degli errori
function errorHandler(err, req, res, next) {
    console.error(err);

    // Se l’errore ha uno status, lo usa, altrimenti 500
    const status = err.status || 500;
    const message = err.message || 'Errore interno del server';

    res.status(status).json({ error: message });
}

module.exports = errorHandler;