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

module.exports = {
    index,
    show
};
