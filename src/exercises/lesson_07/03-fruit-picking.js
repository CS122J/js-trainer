const basket = [
  "love",
  "joy",
  "peace",
  "longsuffering",
  "kindness",
  "goodness",
  "faithfulness",
  "gentleness",
  "self-control",
]

function pickFruits(fruits) {
  // Rewrite the following line by using array destructuring
  const [first, second, third] = fruits;

  return [first, second, third]
}

/** EXPORT - DO NOT MODIFY **/
export const answer = pickFruits(basket)
