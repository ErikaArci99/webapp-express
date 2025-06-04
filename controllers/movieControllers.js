const connection = require('../data/db');

// INDEX
const index = (req, res, next) => {
    connection.query("SELECT * FROM movies", (err, moviesResult) => {
        if (err) return next(err); // passo l’errore al middleware

        const movies = moviesResult.map(movie => ({
            ...movie,
            image: req.imagePath + movie.image
        }));

        res.json(movies);
    });
};

// SHOW
const show = (req, res, next) => {
    const { id } = req.params;

    const movieSql = "SELECT * FROM movies WHERE id = ?";
    const reviewsSql = "SELECT * FROM reviews WHERE movie_id = ?";

    connection.query(movieSql, [id], (err, movieResult) => {
        if (err) return next(err);

        if (movieResult.length === 0 || movieResult[0].id === null) {
            const notFoundError = new Error('Film non trovato');
            notFoundError.status = 404;
            return next(notFoundError);
        }

        const movie = movieResult[0];

        connection.query(reviewsSql, [id], (err, reviewResult) => {
            if (err) return next(err);

            movie.reviews = reviewResult;

            res.json({ ...movie, image: req.imagePath + movie.image });
        });
    });
};

// STORE - salva un nuovo film con immagine nel database
const store = (req, res, next) => {
    const { title, director, abstract } = req.body;

    // multer salva l'immagine in req.file
    const imageName = req.file.filename;

    const sql = 'INSERT INTO movies (title, a, genre, release_year, abstract, image) VALUES (?, ?, ?, ?, ?, ?)';

    connection.query(sql, [title, director, genre, release_year, abstract, imageName], (err, result) => {
        if (err) return next('errore nel caricamento nuovo film');

        res.status(201).json({
            message: 'film inserito con successo',
            status: 'success',
        });
    });
};

module.exports = {
    index,
    show
};
