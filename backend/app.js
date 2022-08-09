const express = require('express');
require('dotenv').config();
const { celebrate, Joi } = require('celebrate');


const app = express();
const { PORT = 3003 } = process.env;
const { MONGO_URI = 'mongodb://localhost:27017/' } = process.env;
const { errors } = require('celebrate');

const mongoose = require('mongoose');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
}).then(console.log('* mongoDb connected *'));

const bodyParser = require('body-parser');

app.use(bodyParser.json());
const cors = require("cors");
const users = require('./routes/users');
const articles = require('./routes/articles');
const midServerError = require('./errors/midServerError');
const NotFundError = require('./errors/NotFundError');
const { errorLogger, requestLogger } = require('./midelweres/logger');
const { createUsers, login } = require('./controllers/users');
const auth = require('./midelweres/auth');
const {signinSchema,signupSchema} = require("./models/joiScema")
const allowedOrigins = [
  "http://localhost:3000", // Use the port your frontend is served on
];

app.use(cors(allowedOrigins)); 
// req log winston
app.use(requestLogger);
app.post('/signup',celebrate(signupSchema), createUsers);
app.post('/signin',celebrate(signinSchema),login);
app.use(auth);
app.use('/users', users);
app.use('/articles', articles);
app.get('*', () => { throw new NotFundError('page not found 404'); });

app.use(errors());
app.use(midServerError);

// winston logger
app.use(errorLogger);

app.listen(PORT, () => {
  console.log(`link to server on ${PORT}`);
});
