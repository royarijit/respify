// apiResponseHandler.js

// Function to generate a success response
function successResponse(data) {
    return {
      status: 'success',
      data,
    };
  }
  
  // Function to generate an error response with a given status code
  function errorResponse(statusCode, message) {
    return {
      status: 'error',
      statusCode,
      message,
    };
  }
  
  // Middleware to handle errors and send standardized responses
  function errorHandler(err, req, res, next) {
    console.error(err);
  
    // Handle specific errors
    if (err instanceof UnauthorizedError) {
      return res.status(401).json(errorResponse(401, 'Unauthorized'));
    }
  
    // Handle other errors
    return res.status(500).json(errorResponse(500, 'Internal Server Error'));
  }

  // apiResponseHandler.js

// Function to generate a validation error response
function validationErrorResponse(errors) {
    return {
      status: 'error',
      statusCode: 422,
      message: 'Validation failed',
      errors,
    };
  }
  
  // Function to generate a not found response
  function notFoundResponse(message = 'Resource not found') {
    return {
      status: 'error',
      statusCode: 404,
      message,
    };
  }
  
  // Function to generate a custom response with a given status code and message
  function customResponse(statusCode, message, data = null) {
    return {
      status: 'custom',
      statusCode,
      message,
      data,
    };
  }
  
  module.exports = {
    successResponse,
    errorResponse,
    validationErrorResponse,
    notFoundResponse,
    customResponse,
    errorHandler,
  };
  
  
  