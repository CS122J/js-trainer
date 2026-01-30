function countBs(str) {
  let count = 0; // initialize counter
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") { // check if the current character is "B"
      count++;
    }
  }
  return count; // return the total count
}

const myStr = "BBC"

// ** EXPORT - DO NOT MODIFY ** //
export const answer = countBs(myStr)
