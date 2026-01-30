const invoiceData = {
  buyerName: "John Smith",
  itemTitle: "Iron Skillet",
  sku: "39879",
  price: 59.63,
  shipTo: {
    name: "Jane Smith",
    address: "123 Maple Street",
    city: "Pretendville",
    state: "NY",
    zip: "12345",
  },
}

function thankCustomer(order) {
  // Your solution

  const greet = `Dear ((NAME)),`
  const thank = `Thanks for your ((PRODUCT)) purchase!`
  const ship = `We're shipping your order to $((RECIPIENT)) in ((CITY)), ((STATE)).`
  // Stop here
  return `${greet}\n${thank}\n${ship}`
}

/** EXPORT - DO NOT MODIFY **/
export const answer = thankCustomer(invoiceData)
