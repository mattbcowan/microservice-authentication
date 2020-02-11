require("dotenv").config();
const express = require("express");
const session = require("express-session");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./api");

const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(session({ secret: "keyboard cat" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// REGISTER ALL ROUTES
app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
