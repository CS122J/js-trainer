function getLightState() {
  let switchPosition = "up"
  let lightState = ""
  lightState = switchPosition === "up" ? "on" : "off"
  const response = "The light is " + lightState
  return response
}

// ** EXPORT - DO NOT MODIFY ** //
export const answer = getLightState()
