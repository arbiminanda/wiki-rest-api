module.exports = (app) => {
  const article = require("../controllers/articles.controller");
  const r = require("express").Router();

  r.route("/")
    .get(article.find)
    .post(article.create)
    .delete(article.deleteMany);

  r.route("/:articleTitle")
    .get(article.findOne)
    .put(article.updateOne)
    .patch(article.updateOnePartial)
    .delete(article.deleteOne);

  app.use("/articles", r);
};
