function evaluateStrictEquality() {
  let a = 5,
    b = "5"
  let isStrictEqual = a === b // <-- modify this line
  const statement = "Strict equality for a and b is " + isStrictEqual + "."
  return statement
}

// ** EXPORT - DO NOT MODIFY ** //
export const answer = evaluateStrictEquality()
