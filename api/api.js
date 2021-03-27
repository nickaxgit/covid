const express = require("express");
const apiRouter = express.Router();

let ticket = 0;
const displayList = {};

apiRouter.get("/next", (req, res) => {
  //http://localhost:3000/next?tent=tent5
  const tent = req.query.tent;
  ticketIncrement();
  displayList[ticket] = tent;
  res.type("application/json");
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.send(JSON.stringify({ ticket }));
});

apiRouter.get("/display", (req, res) => {
  res.type("application/json");
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.send(JSON.stringify(displayList));
});

apiRouter.get("/present", (req, res) => {
  const ticket = req.query.ticket;
  delete displayList[ticket];
  res.type("application/json");
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.status(200).send("OK");
});

const ticketIncrement = () => (ticket == 999 ? (ticket = 1) : ticket++);
module.exports = apiRouter;
