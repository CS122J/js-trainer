function reverseString(str) {
  let transformedString = ""
  // Your solution here
  transformedString = str.split("").reverse().join("")
  return transformedString
}

const myString = "The quick brown fox jumped over the lazy dog."

const answer = reverseString(myString)

// ** EXPORT - DO NOT MODIFY ** //
export { answer }
