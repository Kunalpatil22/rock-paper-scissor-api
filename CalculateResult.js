//Exporting Logic behind result calculation
module.exports = function CalculateResult(players = []) {
  const result = [
    {
      player_id: 1,
      player_points: 0,
    },
    {
      player_id: 2,
      player_points: 0,
    },
    {
      player_id: 3,
      player_points: 0,
    },
    {
      player_id: 4,
      player_points: 0,
    },
  ];

  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players.length; j++) {
      if (
        players[i].player_choice == "rock" &&
        players[j].player_choice == "scissor"
      ) {
        result[i].player_points += 1;
      } else if (
        players[i].player_choice == "paper" &&
        players[j].player_choice == "rock"
      ) {
        result[i].player_points += 1;
      } else if (
        players[i].player_choice == "scissor" &&
        players[j].player_choice == "paper"
      ) {
        result[i].player_points += 1;
      }
    }
  }

  return result;
};
