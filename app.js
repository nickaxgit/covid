"use strict";
const express = require("express");
const path=require("path")
const apiRouter = require('./api/api');
const app = express();
const PORT = 3000;

//var bodyParser = require('body-parser')
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '')));
app.use('/api', apiRouter);

app.get("/tent", (req, res) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.sendFile(path.join(__dirname + '/views/tent.html'));
});

app.get("/display", (req, res) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.sendFile(path.join(__dirname + '/views/display.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

module.exports = app;