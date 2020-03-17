const express = require("express");
const scoreRoute = express.Router();
const pool = require("./connection");

scoreRoute.get("/scores", (req, res) => {
  pool.query("select * from scores").then(result => {
    res.send(result.rows);
  });
});

scoreRoute.post("/scores", (req, res) => {
  pool
    .query(
      "insert into scores (username, city, state, score) values ($1::text, $2::text, $3::text, $4::int)",
      [req.body.username, req.body.city, req.body.state, req.body.score]
    )
    .then(result => {
      res.send(req.body);
    });
});

module.exports = { scoreRoute };
