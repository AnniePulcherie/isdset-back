// authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  if (req.isAuthenticated()){
    return next;
  }
  res.status(401).json({message: 'Unauthorized'});
};

module.exports = authMiddleware;
