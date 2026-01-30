function getCylinderVolume() {
  const pi = Math.PI
  let r = 12
  let h = 36
  let v = pi * r * r * h // <-- modify this line
  const answer = "Cylinder volume is " + v + "."
  return answer
}

// ** EXPORT - DO NOT MODIFY ** //
export const answer = getCylinderVolume()
