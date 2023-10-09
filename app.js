// app.js

const express = require('express');
const bodyParser = require('body-parser');
const { successResponse, errorResponse, errorHandler } = require('./apiResponseHandler');
const { notFoundResponse } = require('./apiResponseHandler');
const { validationErrorResponse } = require('./apiResponseHandler');

const app = express();

// Use middleware
app.use(bodyParser.json());
app.use(errorHandler);

// Define routes
app.get('/api/success', (req, res) => {
  const responseData = { message: 'Request successful' };
  res.json(successResponse(responseData));
});

app.get('/api/error', (req, res, next) => {
  // Simulate an error (UnauthorizedError)
  const unauthorizedError = new UnauthorizedError('Unauthorized access');
  next(unauthorizedError);
});

app.get('/')

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ...

app.get('/api/notfound', (req, res) => {
    res.status(404).json(notFoundResponse('Resource not found'));
  });

app.get('/api/validationerror', (req, res) => {
    res.status(422).json(validationErrorResponse('Error in Validation Response'));
});
