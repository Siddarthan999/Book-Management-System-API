exports.logRequest = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

exports.notFoundHandler = (req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
};

exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
};
