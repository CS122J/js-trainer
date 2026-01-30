function gameCreditsLeft() {
  let eventLog = "Events:\n~~~~~~~\n"
  const credits = 3
  const createGame = function (playerName) {
    let myCredits
    return function playGame() {
      // more code needed
      console.log(`${playerName} is playing and has ??? credit(s) left`)
    }
  }

  // declare variables, call functions, etc.

  return eventLog
}

// ** EXPORT - DO NOT MODIFY ** //
export const answer = gameCreditsLeft()
