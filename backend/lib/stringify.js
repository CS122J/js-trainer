function stringifyAnswer(value) {
  const ansType = typeof value
  const ansResult = ansType === "function" ? value.toString() : value

  let answer

  switch (ansType) {
    case "string":
      answer = `String: \n———————\n${ansResult}`
      break
    case "number":
      answer = `Number: ${ansResult}`
      break
    case "boolean":
      answer = `Boolean: ${ansResult}`
      break
    case "function":
      answer = `Function: \n—————————\n${ansResult}`
      break
    case "symbol":
      answer = `Symbol: ${ansResult.toString()}`
      break
    case "bigint":
      answer = `Bigint: ${ansResult.toString()}`
      break
    case "object":
      if (Array.isArray(ansResult)) {
        answer =
          JSON.stringify(ansResult).length < 30
            ? `Array: ${JSON.stringify(ansResult, null, 0)}`
            : `Array: \n——————\n${JSON.stringify(ansResult, null, 2)}`
      } else if (ansResult === null) {
        answer = "null"
      } else {
        answer = `Object: \n———————\n${JSON.stringify(ansResult, null, 2)}`
      }
      break
    case "undefined":
      answer = "undefined"
      break
    default:
      answer = ansResult
  }

  return answer
}

function stringifyLog(value) {
  const ansType = typeof value
  const ansResult = ansType === "function" ? value.toString() : value

  let answer

  switch (ansType) {
    case "string":
    case "number":
    case "boolean":
    case "function":
    case "symbol":
    case "bigint":
      answer = ansResult.toString()
      break
    case "object":
      if (Array.isArray(ansResult)) {
        answer = JSON.stringify(ansResult, null, 2)
      } else if (ansResult === null) {
        answer = "null"
      } else {
        answer = JSON.stringify(ansResult, null, 2)
      }
      break
    case "undefined":
      answer = "undefined"
      break
    default:
      answer = ansResult
  }

  return answer
}

function stringifyVerification(verification) {
  if (!verification || !verification.feedback) return ""
  return verification.feedback.join("\n")
}

export { stringifyAnswer, stringifyLog, stringifyVerification }
