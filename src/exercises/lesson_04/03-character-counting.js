function countChars(str, char) {
  let count = 0; // initialize counter
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) { // check if current character matches
      count++;
    }
  }
  return count; // return the total count
}

const myStr = "effervescence"
const myChar = "e"

// ** EXPORT - DO NOT MODIFY ** //
export const answer = countChars(myStr, myChar)
