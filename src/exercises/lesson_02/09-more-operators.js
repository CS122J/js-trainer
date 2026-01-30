function fireConditions() {
  let hasSpark = true
  let hasFuel = true
  let isWet = false
  let hasFireConditions = false
  if (/* modify code here */ isWet) {
    hasFireConditions = true
  }
  const answer = "Do we have fire conditions? " + hasFireConditions
  return answer
}

// ** EXPORT - DO NOT MODIFY ** //
export const answer = fireConditions()
