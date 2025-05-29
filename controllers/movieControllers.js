const connection = require('../data/db');

// INDEX - elenco di tutti i film
const index = (req, res) => {
    connection.query("SELECT * FROM movies", (err, moviesResult) => {
        if (err) return res.status(500).json({ error: "Database query failed: " + err });

        const movies = moviesResult.map((movie) => ({
            ...movie,
            image: req.imagePath + movie.image
        }));

        res.json(movies);
    });
};

// SHOW - dettaglio film + recensioni
const show = (req, res) => {
    const { id } = req.params;

    const movieSql = "SELECT * FROM movies WHERE id = ?";
    const reviewsSql = "SELECT * FROM reviews WHERE movie_id = ?";

    connection.query(movieSql, [id], (err, movieResult) => {
        if (err) return res.status(500).json({ error: "Database query failed: " + err });

        if (movieResult.length === 0 || movieResult[0].id === null) {
            return res.status(404).json({ error: "Film non trovato" });
        }

        const movie = movieResult[0];

        connection.query(reviewsSql, [id], (err, reviewResult) => {
            if (err) return res.status(500).json({ error: "Database query failed: " + err });

            movie.reviews = reviewResult;

            res.json({ ...movie, image: req.imagePath + movie.image });
        });
    });
};

module.exports = { index, show }