const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const { logRequest, errorHandler, notFoundHandler } = require('./middleware');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(logRequest);

// Routes
app.use('/books', routes);

// 404 Handler
app.use(notFoundHandler);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});
