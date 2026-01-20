
let totalBill = 0;
let itemList = [];

while (true) {
    let itemName = prompt("Enter the name of the item you want to buy:");
    let itemPrice = parseFloat(prompt("Enter item price:"));
    let itemQuantity = parseInt(prompt("Enter item quantity:"));

    let subtotal = itemPrice * itemQuantity;
    totalBill += subtotal;
    itemList.push(
        `${itemQuantity} x ${itemName} at $${itemPrice.toFixed(2)} = $${subtotal.toFixed(2)}`
    );

    let moreItems = prompt("Do you want to add another item? (yes/no)").toLowerCase();

    if (moreItems !== "yes") {
        break;
    }
}

let discount = 0;
if (totalBill > 50) {
    discount = totalBill * 0.10;
    totalBill = totalBill - discount;
    console.log(`A 10% discount of $${discount} has been applied.`);
}

console.log("Receipt:");
itemList.forEach(item => console.log(item));
console.log(`Discount: $${discount}`);
console.log(`Total Bill: $${totalBill}`);