function forOfLoopObjKeys() {
  // Your solution
  const trackFieldAA = {
    calebPouliot: "Pole Vault",
    davisBoggess: "5K",
    danielRush: "5K",
    anthonyGhiorso: "1500",
    wesleyMethum: "10K",
  }

  const keys = Object.keys(trackFieldAA);

  // Loop through each key and log the name
  for (const key of keys) {
    console.log(key);
  }

  return null
}

/** EXPORT - DO NOT MODIFY **/
export const answer = forOfLoopObjKeys()
