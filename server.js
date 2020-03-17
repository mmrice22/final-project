const express = require("express");
const cors = require("cors");
const { questionsRoute } = require("./questions.api");
<<<<<<< HEAD
// const {scoreRoute} = require("./scores.api");
=======
const { scoreRoute } = require("./scores.api");
>>>>>>> 8836cf92602ee6d9bf68817f22c7541bdf5c3bef
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", questionsRoute);
app.use("/", scoreRoute);
const port = 3000;
// Use Heroku's PORT or default to 3000.
// const port = process.env.PORT || DEFAULT_PORT;
app.listen(port, () => console.log(`Listening on port: ${port}`));
