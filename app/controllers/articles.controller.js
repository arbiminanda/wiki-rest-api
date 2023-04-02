const db = require("../models");
const Article = db.Article;

exports.create = (req, res) => {
  const newArticle = {
    title: req.body.title,
    content: req.body.content,
  };
  Article.create(newArticle)
    .then(() => res.send("Successfully add new article"))
    .catch((err) => res.send(err));
};

exports.find = (req, res) => {
  Article.find()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.deleteMany = (req, res) => {
  Article.deleteMany()
    .then(() => res.send("Successfully delete all articles"))
    .catch((err) => res.send(err));
};

exports.findOne = (req, res) => {
  Article.findOne({ title: req.params.articleTitle })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.updateOne = (req, res) => {
  const updateArticle = {
    title: req.body.title,
    content: req.body.content,
  };
  Article.updateOne({ title: req.params.articleTitle }, updateArticle)
    .then(() => res.send("Successfully update article"))
    .catch((err) => res.send(err));
};

exports.updateOnePartial = (req, res) => {
  Article.updateOne({ title: req.params.articleTitle }, { $set: req.body })
    .then(() => res.send("Successfully update article partially"))
    .catch((err) => res.send(err));
};

exports.deleteOne = (req, res) => {
  Article.deleteOne({ title: req.params.articleTitle })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};
