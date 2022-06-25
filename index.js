// Importing modules
const express = require("express");
const CalculateResult = require("./CalculateResult");

// Configuring environment variables
require("dotenv").config();

// Fetching environment variables
const PORT = process.env.PORT || 5000;

const app = express();

// JSON Middleware
app.use(express.json());

// Configuring routes
app.get("/game/start", (req, res) => {
  let choice = { 0: "rock", 1: "paper", 2: "scissor" };
  let results = [];
  let i = 0;
  while (i - 1 < 50) {
    let players = [
      {
        player_id: 1,
        player_choice: choice[Math.round(Math.random() * 2)],
      },
      {
        player_id: 2,
        player_choice: choice[Math.round(Math.random() * 2)],
      },
      {
        player_id: 3,
        player_choice: choice[Math.round(Math.random() * 2)],
      },
      {
        player_id: 4,
        player_choice: choice[Math.round(Math.random() * 2)],
      },
    ];

    results.push(CalculateResult(players));
    console.log(i);
    i++;
  }
  res.send(results);
  res.end();
});

// Server startup
app.listen(PORT, () => {
  console.log(`Server started at Port: ${PORT}`);
});
