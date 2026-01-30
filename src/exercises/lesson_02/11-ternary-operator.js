function getLightState() {
  let switchPosition = "up"
  let lightState = ""
  lightState = switchPosition === "up" // <-- modify this line
  const response = "The light is " + lightState
  return response
}

// ** EXPORT - DO NOT MODIFY ** //
export const answer = getLightState()
