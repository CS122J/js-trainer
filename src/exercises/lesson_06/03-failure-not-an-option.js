const bobScores = [90, 85, 62, 71, 86, 100, 92, 0, 75]
const maryScores = [65, 92, 52, 28, 42, 9, 78, 62, 92]
const juanScores = [86, 72, 45, 91, 99, 85, 12, 75, 88]

function noFailures() {
  // Function that filters out scores below 60
  function noFails(scoresArr) {
    return scoresArr.filter(score => score >= 60);
  }

  // Call the function for each student and log the results with length
  const bobFiltered = noFails(bobScores);
  console.log(`Bob ▶ (${bobFiltered.length}) [${bobFiltered.join(', ')}]`);

  const maryFiltered = noFails(maryScores);
  console.log(`Mary ▶ (${maryFiltered.length}) [${maryFiltered.join(', ')}]`);

  const juanFiltered = noFails(juanScores);
  console.log(`Juan ▶ (${juanFiltered.length}) [${juanFiltered.join(', ')}]`);

  return null;
}



/** EXPORT - DO NOT MODIFY **/
export const answer = noFailures()
