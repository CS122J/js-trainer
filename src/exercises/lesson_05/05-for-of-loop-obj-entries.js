function forOfLoopObjEntries() {
  // Your solution
  const topMarathoners = {
    jeffreyJackson: "2:31.44",
    tylerTockstein: "2:35.25",
    joshiahDowner: "2:39.54",
    johnHurd: "2:41.40",
  }
  const entries = Object.entries(topMarathoners);

  // Loop through each entry
  for (const [name, time] of entries) {
    console.log(`Name: ${name} | Time ${time}`);
  }
  return null
}

/** EXPORT - DO NOT MODIFY **/
export const answer = forOfLoopObjEntries()
