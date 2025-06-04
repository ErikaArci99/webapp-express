const imagePath = (req, res, next) => {
    req.imagePath = `${req.protocol}://${req.get('host')}/img/movies/`;
    next();
};

module.exports = imagePath;