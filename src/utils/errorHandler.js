exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      error: err.message
    });
  }

  if (err.name === 'MongoServerError' && err.code === 11000) {
    return res.status(400).json({
      success: false,
      error: 'Duplicate entry. This email may already be registered.'
    });
  }

  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal server error'
  });
};