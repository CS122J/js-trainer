function interpolateInString() {
  const car = "Toyota"
  const driver = "Bob"
  const speed = 80
  const speedLimit = 35
  const officer = "Officer Tim"
  const ticketCost = 500

  // Your answer
  let sentence =
    `Uncle ${driver} was driving his 1984 ${car} at ${speed} miles an hour in a ${speedLimit} mph zone. ${officer} pulled him over and issued a ticket for $${ticketCost}!`
  return sentence
}

// ** EXPORT - DO NOT MODIFY ** //
export const answer = interpolateInString()
