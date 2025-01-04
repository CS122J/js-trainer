function getDayoffStatus() {
  let day = "Sunday"
  let dayOff = false
  if (day /* modify code here */) {
    dayOff = true
  }
  const answer = "Do I have the day off? " + dayOff
  return answer
}

// ** EXPORT - DO NOT MODIFY ** //
export const answer = getDayoffStatus()
