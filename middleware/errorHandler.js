// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    // Log to console for developer
    console.error(err.stack.red);
  
    let error = { ...err };
    error.message = err.message;
  
    // Mongoose bad ObjectId (Cast Error)
    if (err.name === 'CastError') {
      const message = `Resource not found with id of ${err.value}`;
      error = new Error(message);
      error.statusCode = 404;
    }
  
    // Mongoose duplicate key
    if (err.code === 11000) {
      const message = 'Duplicate field value entered';
      error = new Error(message);
      error.statusCode = 400;
    }
  
    // Mongoose validation error
    if (err.name === 'ValidationError') {
      const message = Object.values(err.errors).map(val => val.message);
      error = new Error(message);
      error.statusCode = 400;
    }
  
    // JWT errors
    if (err.name === 'JsonWebTokenError') {
      const message = 'Not authorized, token failed';
      error = new Error(message);
      error.statusCode = 401;
    }
  
    // Default to 500 server error
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Server Error';
  
    res.status(statusCode).json({
      success: false,
      error: message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  };
  
  module.exports = errorHandler;