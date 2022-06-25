//Exporting Logic behind result calculation
module.exports = function CalculateResult(players = []) {
  const result = [
    {
      player_id: 1,
      player_points: [],
    },
    {
      player_id: 2,
      player_points: [],
    },
    {
      player_id: 3,
      player_points: [],
    },
    {
      player_id: 4,
      player_points: [],
    },
  ];

  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players.length; j++) {
      if (players[i].player_id == players[j].player_id) {
        result[i].player_points.push(null);
      } else if (
        players[i].player_choice == "rock" &&
        players[j].player_choice == "rock"
      ) {
        result[i].player_points.push(0);
      } else if (
        players[i].player_choice == "rock" &&
        players[j].player_choice == "paper"
      ) {
        result[i].player_points.push(0);
      } else if (
        players[i].player_choice == "rock" &&
        players[j].player_choice == "scissor"
      ) {
        result[i].player_points.push(1);
      } else if (
        players[i].player_choice == "paper" &&
        players[j].player_choice == "rock"
      ) {
        result[i].player_points.push(1);
      } else if (
        players[i].player_choice == "paper" &&
        players[j].player_choice == "paper"
      ) {
        result[i].player_points.push(0);
      } else if (
        players[i].player_choice == "paper" &&
        players[j].player_choice == "scissor"
      ) {
        result[i].player_points.push(0);
      } else if (
        players[i].player_choice == "scissor" &&
        players[j].player_choice == "rock"
      ) {
        result[i].player_points.push(0);
      } else if (
        players[i].player_choice == "scissor" &&
        players[j].player_choice == "paper"
      ) {
        result[i].player_points.push(1);
      } else if (
        players[i].player_choice == "scissor" &&
        players[j].player_choice == "scissor"
      ) {
        result[i].player_points.push(0);
      }
    }
  }

  return result;
};

// Test case:

// const players = [
//   {
//     player_id: 1,
//     player_choice: "paper",
//   },
//   {
//     player_id: 2,
//     player_choice: "scissor",
//   },
//   {
//     player_id: 3,
//     player_choice: "scissor",
//   },
//   {
//     player_id: 4,
//     player_choice: "rock",
//   },
// ];

// console.log(CalculateResult(players));
