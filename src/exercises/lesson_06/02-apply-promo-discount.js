const sales = [75.98, 1038.59, 12.6, 250.0, 847.1, 478.16, 89.98]

function applyDiscount() {
  const discounted = sales.map(sale => {
    if (sale >= 100) {
      return Number((sale * 0.85).toFixed(2)); // apply 15% discount
    } else {
      return Number(sale.toFixed(2)); // keep as is, rounded to 2 decimals
    }
  });


  return discounted
}

/** EXPORT - DO NOT MODIFY **/
export const answer = applyDiscount()
