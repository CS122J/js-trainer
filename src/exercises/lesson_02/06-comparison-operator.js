function useComparisonOperator() {
  let sleepHours = 10
  let feeling = ""
  if (sleepHours /* add logic here */) {
    feeling = "tired"
  } else {
    feeling = "rested"
  }
  const statement = "I am feeling " + feeling
  return statement
}

// ** EXPORT - DO NOT MODIFY ** //
export const answer = useComparisonOperator()
