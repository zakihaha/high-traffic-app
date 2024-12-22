const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', function(req, res, next) {
  res.send("Sharing session NEXA - Let's Build High Scalable & Availability Cloud Infrastructure for High Traffic Application");
});

module.exports = app;
