const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserSchema = require('../models/users');
const InvalidDataError = require('../errors/InvalidDataError');
const NotFundError = require('../errors/NotFundError');
require('dotenv').config();

const { NODE_ENV, JWT_SECRET } = process.env;
let theUserName
const getUserInfo = (req, res, next) => {
  const _id = req.user;
  UserSchema.findById(_id)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

const createUsers = (req, res, next) => {
  console.log(req.body);
  const { name, email } = req.body;

  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => UserSchema.create({
      email,
      name,
      password: hash,
    }))
    .then((newUser) => {
      res.send({ data: newUser });
    })
    .catch((err) => {
      console.log(err);
      if (err.code =="11000")
       { 
        res.send({"err":"cant use that email"})
        throw new InvalidDataError('cant use that email')
      } 
    }
    ).catch(next)
};

const login = (req, res, next) => {
  let userId;
  const { email, password } = req.body;

  UserSchema.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new InvalidDataError('Incorrect password or email');
      }
      theUserName = user.name
      userId = user._id;
      return bcrypt.compare(password, user.password);
    })
    .then((matched) => {
      if (!matched) {
        // the hashes not match, rejecting the promise
        throw new InvalidDataError('Incorrect password or email');
      }

      res.send({ token: jwt.sign({ _id: userId }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' }) , name:theUserName});
    })
    .catch(next);
};

module.exports = { getUserInfo, createUsers: createUsers, login };
