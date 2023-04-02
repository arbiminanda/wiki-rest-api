const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", ejs);
app.use(express.static("public"));

app.use(cors(corsOptions));

mongoose.connect("mongodb://localhost:27017/express", {
  useNewUrlParser: true,
});
const articleSchema = mongoose.Schema({
  title: String,
  content: String,
});
const Article = mongoose.model("Article", articleSchema);

app
  .route("/articles")
  .get(function (req, res) {
    Article.find()
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  })
  .post(function (req, res) {
    const newArticle = {
      title: req.body.title,
      content: req.body.content,
    };
    Article.create(newArticle)
      .then(() => res.send("Successfully add new article"))
      .catch((err) => res.send(err));
  })
  .delete(function (req, res) {
    Article.deleteMany()
      .then(() => res.send("Successfully delete all articles"))
      .catch((err) => res.send(err));
  });

app
  .route("/articles/:articleTitle")
  .get(function (req, res) {
    Article.findOne({ title: req.params.articleTitle })
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  })
  .put(function (req, res) {
    const updateArticle = {
      title: req.body.title,
      content: req.body.content,
    };
    Article.updateOne({ title: req.params.articleTitle }, updateArticle)
      .then(() => res.send("Successfully update article"))
      .catch((err) => res.send(err));
  })
  .patch(function (req, res) {
    Article.updateOne({ title: req.params.articleTitle }, { $set: req.body })
      .then(() => res.send("Successfully update article partially"))
      .catch((err) => res.send(err));
  })
  .delete(function (req, res) {
    Article.deleteOne({ title: req.params.articleTitle })
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
