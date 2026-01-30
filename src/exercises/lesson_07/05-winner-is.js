const bestPics = [
  {
    id: "win80",
    year: 1980,
    title: "Ordinary People",
    category: "drama",
    director: "Robert Redford",
    grossinMM: 54.8,
    lengthMins: 124,
  },
  {
    id: "win81",
    year: 1981,
    title: "Chariots of Fire",
    category: "sport",
    director: "Hugh Hudson",
    grossinMM: 59.0,
    lengthMins: 125,
  },
  {
    id: "win82",
    year: 1982,
    title: "Ghandi",
    category: "biography",
    director: "Richard Attenborough",
    grossinMM: 52.8,
    lengthMins: 191,
  },
]

let movie = bestPics[0]

// Update the parameters to use destructuring instead
function makeAnnouncement(movie) {
  let message
  try {
    message = `The Academy of Motion Pictures is proud to announce the winner of the ??? Best Picture Award to ???! Congratulations to director ??? for this wonderful ??? film!`
  } catch (e) {
    return `Oops! You have an error. ${e}`
  }
  return message
}
/** EXPORT - DO NOT MODIFY **/
export const answer = makeAnnouncement(movie)
