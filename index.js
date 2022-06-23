// Importing modules
const express = require("express");
const mongoose = require("mongoose");
const CalculateResult = require("./CalculateResult");

// Importing Models
const Result = require("./models/Result");

// Configuring environment variables
require("dotenv").config();

// Fetching environment variables
const PORT = process.env.PORT || 5000;
const DB_CONNECT = process.env.DB_CONNECT;

// Configuring database and express server
mongoose.connect(DB_CONNECT, () => {
  console.log("Database connection established");
});
const app = express();

// JSON Middleware
app.use(express.json());

// Game data
let game_data = [];

// Configuring routes
app.get("/game/start", async (req, res) => {
  const resultCount = await Result.count();
  if (resultCount < 50) {
    if (game_data.length == 4) {
      const result = new Result({ result: CalculateResult(game_data) });
      result.save((err, doc) => {
        if (err) {
          console.log(err);
        } else {
          console.log(doc);
        }
      });
      game_data = [];
      game_data.push(req.body);
      res.end();
    } else {
      game_data.push(req.body);
      res.end();
    }
  } else {
    res.send(await Result.find({}));
    res.end();
  }
});

// Server startup
app.listen(PORT, () => {
  console.log(`Server started at Port: ${PORT}`);
});
