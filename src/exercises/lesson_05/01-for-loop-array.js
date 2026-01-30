function forLoopArray() {
  // Your solution
  const primitives = [
    "string",
    "boolean",
    "null",
    "number",
    "undefined",
    "symbol",
  ]
    for (let i = 0; i < primitives.length; i++) {
    console.log(primitives[i]); // log each primitive type
  }

  return null;
}

/** EXPORT - DO NOT MODIFY **/
export const answer = forLoopArray()
