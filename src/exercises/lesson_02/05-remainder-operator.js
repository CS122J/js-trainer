function useRemainderOperator() {
  let proposedNumber = 10
  let isEven = proposedNumber % 2 === 0 // <-- modify this line
  return isEven
}

// ** EXPORT - DO NOT MODIFY ** //
export const answer = useRemainderOperator()
