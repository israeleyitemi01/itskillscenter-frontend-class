// syntax for function in javascript - EXPLANATION 
// 1. function: the keyword use to define a function
// 2. functionName- use descriptive names to clarify function purpose e.g fu
// 3. parameters: they are placeholder variable that accept input
// function body: the block of code that performs the task.
// return: sends the function's output back to the caller.

// NB: parameter (a, b): a is responsible for first input, while b is responsible for second
// function addNumbers(a, b) {
//     return a + b;
// }
// console.log(addNumbers(2, 3));

// arguments are the actual values you pass into a function when you call it. They are different from parameters, which are the names listed in the function definition

function division(c, d){
    let result = c / d;
    return result
}
console.log(division(100, 20));

function modulus(num1, num2){
    let result = num1 % num2;
    return result;
}
console.log(modulus(80, 3));

// function to greet users
// function greetUser(name) {
//     alert(`Hello ${name}, Welcome to our website!`);
// }
// greetUser("Israel");

let userName = prompt("Please enter your name:");
function greetUser(name) {
      alert(`Hello ${name}, Welcome to our website!`);
}
greetUser(userName);  


