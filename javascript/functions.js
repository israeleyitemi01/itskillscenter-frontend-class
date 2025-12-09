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

// let userName = prompt("Please enter your name:");
// function greetUser(name) {
//       alert(`Hello ${name}, Welcome to our website!`);
// }
// greetUser(userName);  

// function welcomeUser(name) {
//     alert("welcome, " + name);
// }
// welcomeUser('Israel Eyitemi');

// 3. Arrow Function

// const subtractNumbers = (a, b) => a - b
// console.log(subtractNumbers(10, 5));

// setTimeout(function() {
//     alert("I am an anonymous function! called after 5 seconds.")
// }, 5000);

// NOTE: setTimeout is an example of a higher order function

// (function() {
//     alert("This is an immediately invoked function!");
// })();

// function operate(a, b, operation) {
//     return operation(a, b);
// }
// const result = operate(10, 5, (x, y) => x * y);
// console.log(result);

// NOTE: operate is also a higher function

// Rest Parameters
function addNum(a, b, ...numbers) {
    return a + b + numbers.reduce((acc, val) => acc + val, 0);
}
console.log(addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));

// Global Scope
// let geeting = "Hi";
// function displayGreeting() {
//     console.log(greeting);
// }
// displayGreeting();

// function greet(name){
//     alert(`${Welcome} + greet(name)`);
// }
// console.log(name);

const greet = function(name, timeOfDay) {
    if(
        typeof(timeOfDay) === 'string'
        ? (timeOfDay.toLowerCase() === 'morning')
        : (timeOfDay <= 11 && timeOfDay >= 0)
    )
    {
        return `Good morning, ${name}!`;
    }
    else if (
        typeof(timeOfDay) === 'string'
        ? (timeOfDay.toLowerCase() === 'afternoon')
        : (timeOfDay >= 12 && timeOfDay <= 15)
    ) {
        return `Good afternoon, ${name}!`;
    }
    else if(
        typeof(timeOfDay) === 'string' 
        ? (timeOfDay.toLowerCase() === 'evening') 
        : (timeOfDay >= 16 && timeOfDay <= 24)
     ) { 
        return `Good evening, ${name}!`;
    }
    else {
        return 'invalid';
    }
}
console.log(greet('Alice', 'evening'));

function calcArea(l, b) {
    console.log(l*b)
}
calcArea(4,5)

function number(num) {
    if(num %2 === 0) {
        console.log(`${num} is even`)
    }else console.log(`${num} is oddd`)
}

number(4)
number(7)