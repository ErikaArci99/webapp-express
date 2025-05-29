const imagePath = (req, res, next) => {
    req.imagePath = '/img/movies/';
    next();
};

module.exports = imagePath;