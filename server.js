require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./api");

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// REGISTER ALL ROUTES
app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
