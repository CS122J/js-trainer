const gamePlay = {
  player1: {
    name: "Bob",
    score: 122,
  },
  player2: {
    name: "Carlos",
    score: 98,
  },
  declareWinner: function () {
    // add function code here...
    return null
  },
}

function congratulateWinner() {
  return gamePlay.declareWinner()
}

/** EXPORT - DO NOT MODIFY **/
export const answer = congratulateWinner()
