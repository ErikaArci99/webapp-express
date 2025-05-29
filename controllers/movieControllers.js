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

const show = (req, res) => {
    console.log('film con id' + req.params.id)
}

module.exports = { index, show }