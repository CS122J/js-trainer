function gameCreditsLeft() {
  let eventLog = "";
  const credits = 3;

  const createGame = function (playerName) {
    let myCredits = credits; // each player starts with 3 credits

    return function playGame() {
      if (myCredits > 0) {
        myCredits--; // decrement credits
        if (myCredits > 0) {
          console.log(`${playerName} is playing and has ${myCredits} credit(s) left!`);
          eventLog += `${playerName} is playing and has ${myCredits} credit(s) left!\n`;
        } else {
          console.log(`${playerName}'s game is over!`);
          eventLog += `${playerName}'s game is over!\n`;
        }
      } else {
        // Already out of credits
        eventLog += `${playerName}'s game is over!\n`;
      }
    };
  };

  // Create separate games for players
  const player1Game = createGame("Bob");
  const player2Game = createGame("Lily");

  // Simulate some gameplay
  player1Game(); // Bob plays
  player1Game(); // Bob plays
  player2Game(); // Lily plays
  player1Game(); // Bob plays (game over)

  return eventLog;
}

// ** EXPORT - DO NOT MODIFY ** //
export const answer = gameCreditsLeft();
