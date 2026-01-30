function forInLoopArray() {
  const networks = ["nbc", "abc", "cbs", "fox", "cnn"];

  for (let index in networks) {
    console.log(networks[index]); // log the network at this index
  }
  return null;
}


/** EXPORT - DO NOT MODIFY **/
export const answer = forInLoopArray()
