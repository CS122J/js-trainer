const logData = [
  { name: "Tom", ip: "178.239.150.169", online: true },
  { name: "Buffy", ip: "83.86.11.184", online: false },
  { name: "Winston", ip: "230.82.208.95", online: true },
  { name: "Karen", ip: "178.239.150.169", online: true },
  { name: "Marge", ip: "83.86.11.184", online: true },
  { name: "Carlton", ip: "18.205.54.153", online: false },
  { name: "Tony", ip: "100.113.129.10", online: true },
  { name: "Evita", ip: "178.239.150.169", online: true },
  { name: "Jimmy", ip: "83.86.11.184", online: false },
  { name: "Carlos", ip: "100.113.129.10", online: false },
]

function trollDetection() {
  // Your solution
  function findTroll(user) {
    return user.ip === "83.86.11.184" && user.online === true;
  }

  // Use find to locate the first matching user
  const troll = logData.find(findTroll).name;
  return troll;
}

/** EXPORT - DO NOT MODIFY **/
export const answer = trollDetection()
