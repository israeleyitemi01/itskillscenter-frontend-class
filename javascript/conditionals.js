// let age = 18;
// if (age >= 18) {
// console.log("You are an adult");
// }

// let temperature = 20;
// if (temperature > 25) {
//     console.log("It's a hot day!");
// } else {
//     console.log("It's a cool day.");
// }

// let hairPrice = 1500000;
// let customerPay = Number(prompt("Enter your amount to pay(1,500,000)"));
// if (customerPay === hairPrice) {
//     alert("Payment Successful! Expect your delivery in 5 days");
// }
//  else {
//     alert("Invalid Amount");
// } 

//   else if (customerPay === 1000000) {
//     alert("We have Pixie Curls at ₦" + customerPay);
// }
// else if (customerPay === 800000) {
//     alert("We have Bouncy Curls at ₦" + customerPay);
// } else {
//     alert("We do not have any hair at ₦" + "customerPay");
//     }

    //SWITCH
    // let age_ = Number(prompt("your age"));
    // //switch case
    // switch (age_) {
    //     case 18:
    //         console.log("Welcome to page of "  + age_ + " years old");
    //         break;
    //     case 30:
    //         console.log(`You are ${age_} years old. Welcome to your page!`);
    //         break;
    //     case 60: 
    //     console.log(`You are ${age_} years old. Welcome to your page!`);
    //         break;
    //         default:
    //         console.log(
    //                 "The website is not meant for your age bracket. Only for 18, 30 and 60 and above"
    //         );
    // }


    // Ternary operator
    // let isLoggedIn = false;
    // let message = isLoggedIn ? "Welcome bake!" : "please login.";
    // console.log(message);

    // let isLoggedIn = false;
    // let message;
    // if (isLoggedIn) {
    //     message = "Welcome back!";
    // } else {
    //     message = "please login";
    // }
    // console.log(message);

    // Class Work

   let customerPay = Number(prompt("What is your shopping total?", "0"));
   let discount = 0;
   let shippingFee = 0;
   if (isNaN(customerPay)) {
    alert("enter a valid number")
   }
//    Apply Discount
   if (customerPay > 100) {
    discount = 0.20;
   } else if (customerPay > 50 && customerPay <= 100) {
    discount = 0.10;
   } else {
    discount = 0;
   }

   let actualDiscount = customerPay * discount;
   let totalAfterDiscount = customerPay - actualDiscount;
// Shipping fee rule
   if (totalAfterDiscount < 75) {
    shippingFee = 5;
   }
   let finalTotal = totalAfterDiscount + shippingFee;
   console.log("Original Total Amount: $" + customerPay);
   console.log("Discount Applied: $" + discount*100);
   console.log("Shipping Fee: $" + shippingFee);
   console.log("Final Total: $" + finalTotal);