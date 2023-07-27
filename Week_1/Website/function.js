// function calculateTotalPrice (options) {
//     const { price, quantity, subtotal, taxRate, discount } = options;
//     const subtotal = price * quantity;
//     const taxAmount = subtotal * (taxRate / 100);
//     const discountAmount = subtotal * (discount / 100);
//     const total = subtotal + taxAmount - discountAmount + shippingCost;
//     return total;
//   };

function calculateTotalPrice(options) {
  const { price, quantity, taxRate, discount, shippingCost } = options;

  const subtotal = price * quantity;
  const taxAmount = subtotal * (taxRate / 100);
  const discountAmount = subtotal * (discount / 100);
  const total = subtotal + taxAmount - discountAmount + shippingCost;
  return total;
}

const myOption = {
  price: 10,
  quantity: 3,
  taxRate: 8,
  shippingCost: 3,
  discount: 2,
};

console.log(calculateTotalPrice(myOption));
