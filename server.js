const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const db = require("./app/models");

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", ejs);
app.use(express.static("public"));

app.use(cors(corsOptions));

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
});

require("./app/routes/articles.route")(app);

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
