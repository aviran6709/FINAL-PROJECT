const NotFundError = require('../errors/NotFundError');
const PermeationError = require('../errors/PermeationError');
const articleSchema = require('../models/article');

const getArticles = (req, res, next) => {
  articleSchema
    .find({owner: req.user._id})
    .populate('owner')
    .then((data) => {
      if(!data){
        res.send({err:" no data"});
      }else{
        res.send(data);
      }
    })
    .catch(next);
};

const createArticles = (req, res, next) => {
  const {
    keyword, title, content, publishedAt, source, url, urlToImage, owner = req.user._id
  } = req.body;

  articleSchema
    .create({
      keyword, title, content, publishedAt, source, url, urlToImage, owner,
    })
    .then((newArticles) => {
      res.send(newArticles);
    })
    .catch((err)=>{
  console.log(err);
    }).catch(next)
};

const deleteArticles = (req, res, next) => {
  articleSchema
    .findById(req.params.id).populate('owner')
    .then((article) => {
      console.log(article);
      if (!article) {
        throw new NotFundError({"message":'article Not Found'});
      }
      if (article.owner !== req.user._id) {
        throw new PermeationError(' cant delete that article no permeation');
      }
      articleSchema.findByIdAndRemove(req.params.id).then((delArticle) => res.send({message:"the article was deleted"}));
    })
    .catch(next);
};
module.exports = { getArticles, createArticles, deleteArticles };
