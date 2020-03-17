const express = require("express");
const scoreRoute = express.Router();
const pool = require("./connection");

scoreRoute.get("/scores", (req, res) => {
  pool.query("select * from scores").then(result => {
    res.send(result.rows);
  });
});

module.exports = { scoreRoute };
