const mongoose = require("mongoose");
const dbConfig = require("../config/database");

module.exports = {
  mongoose,
  url: dbConfig.url,
  Article: require("./articles.model.js")(mongoose),
};
