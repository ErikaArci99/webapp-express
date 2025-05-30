const imagePath = (req, res, next) => {
    req.imagePath = './public/img/movies/';
    next();
};

module.exports = imagePath;