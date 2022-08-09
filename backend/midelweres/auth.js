require('dotenv').config();

const { NODE_ENV, JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const InvalidDataError = require('../errors/InvalidDataError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    res.send({status:false})
    throw new InvalidDataError('Authorization Required 2');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    // console.log(err);
    throw new InvalidDataError('Authorization Required 3');
  }

  req.user = payload;

  next();
};
