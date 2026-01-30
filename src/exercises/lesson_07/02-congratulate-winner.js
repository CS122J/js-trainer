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
    if (this.player1.score > this.player2.score) {
      return `Congratulations, ${this.player1.name}! You are the winner with ${this.player1.score} points!`;
    } else if (this.player2.score > this.player1.score) {
      return `Congratulations, ${this.player2.name}! You are the winner with ${this.player2.score} points!`;
    } else {
      return `It's a tie! Both ${this.player1.name} and ${this.player2.name} have ${this.player1.score} points!`;
    }
  },
}

function congratulateWinner() {
  return gamePlay.declareWinner()
}

/** EXPORT - DO NOT MODIFY **/
export const answer = congratulateWinner()
