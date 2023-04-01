const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("view engine", ejs);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/express", {
  useNewUrlParser: true,
});
const articleSchema = {
  title: String,
  content: String,
};
const Article = mongoose.model("Article", articleSchema);

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
