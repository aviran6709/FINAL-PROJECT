const mongo = require('mongoose');

const articleSchema = new mongo.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    minlength: 4,
    require: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 4,

  },
  source: {
    type: String,
    required: true,

  },
  publishedAt: {
    type: String,
    required: true,

  },
  url: {
    type: String,
    validate: {
      validator(v) {
        const regex = /https?:\/\/(www\.)?[a-zA-Z0-9-.]{2,63}\.[a-z]{2,6}\/?([-a-zA-Z0-9._~:/?%#[\]@!$&'()*+,;=]*)/;
        return regex.test(v);
      },
      message: 'Wrong url',
    },
    required: true,
  },

  urlToImage: {
    type: String,
    validate: {
      validator(v) {
        const regex = /https?:\/\/(www\.)?[a-zA-Z0-9-.]{2,63}\.[a-z]{2,6}\/?([-a-zA-Z0-9._~:/?%#[\]@!$&'()*+,;=]*)/;
        return regex.test(v);
      },
      message: 'Wrong url',
    },
    required: true,
  },
  owner: {

    type: String,
    required: true,
    select: false,
  },
});
module.exports = mongo.model('articles', articleSchema);
