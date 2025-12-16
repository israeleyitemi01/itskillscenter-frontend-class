// Array Literal
// let fruit = "Apple"
// let fruits = ["Banana", "Orange", " Mango", fruit, "Pineapple"];
// console.log(fruits);
// fruits[2] = "kiwi";

// Modifying Array Element
// console.log(fruits);
// console.log(fruits[fruit.length - 1]);
// console.log(fruits.length);
// length is total number of Array (length start from 1)
// The index of a number is length minus 1(index start from 0)

// Array Construct 
// let numbers = Array (10, 20, 30, 40, 50);
// console.log(numbers);
// console.log(numbers[numbers.length - 3]);

// Array Methods
// 1. Push - Allows you to add value to the end of an array
// let tasks = ["Wake up ", " 20 Minuites Meditation", " Pray", " Brush my teeth", " Read a book", " Take my bath"];
// console.log(tasks);
// tasks.push(" Eat jollof Rice");
// console.log("push: " + tasks);

// 2. Shift - Allows you remove value/element from the beginning of an array
// tasks.shift();
// console.log("shift: " + tasks);

// 3. Unshift - Allows you to add value to the beginning of an array
// tasks.unshift("Wake up");
// console.log("Unshift: " + tasks);

// 4. Pop - Allows you to remove value from the end of an array
// tasks.pop();
// console.log("Pop: " + tasks);


// NEXT CLASS IS LOOP, AFTER LOOP FUNCTION AND THEN Working with Array Methods: Transforming Arrays with map

// let itSkillsStudents = [
//   "israel",
//   "martins",
//   "rywan",
//   "esther",
//   "standfirm",
//   "fortune",
//   "buchi",
//   "obinna",
//   "sarah",
//   "emmanuel",
//   "gabriel",
//   "ngozi",
//   "timilehin",
//   "opeyemi",
//   "mazi",
//   "zion",
//   "michael",
// ];
// console.log(itSkillsStudents);

// for(let i = 0; i<itSkillsStudents.length; i++){
//     console.log(itSkillsStudents[i]);
// }

// itSkillsStudents.forEach(i => {
//     console.log(i);
// })

// for(let i = 0; i<=100; i++){
//     console.log(i)
// }  

// for (let i=2; i<=30; i +=2){
//     console.log(i);
// }

// let fruits = ['Apple', 'Banana', 'Cherry', 'Pawpaw', 'Orange'];
// for(let i=0; i<fruits.length; i +=1){
//     console.log(i + 1 + '. ' + fruits[i]);
// }

// Array Methods Mapping
// let fruit = "Apple"
// let fruits = ["Banana", "Orange", " Mango", fruit, "Pineapple"];
// fruits.map(function (item, index) {
//     console.log(index, item);
// });

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let squares = numbers.map((num) => num * num);
// console.log(squares);

// filter mehtods
// let greaterThanFive = numbers.filter((num) => {
//     return num > 5;
// });
// console.log(greaterThanFive);

// let evenNumbers = numbers.filter((even) => {
//     return even % 2 === 0;
// })
// console.log(evenNumbers);

// Reducing Arrays with Reduce
// let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = numbs.reduce((total, num) => total + num, 0);
// console.log(sum);

// OR
// let numbs = [8, 5, 9, 4, 2, 6, 7, 1, 3, 10];
// let sum = numbs.reduce((accumulators, currentValue) => {
//     return accumulators + currentValue;
// }, 0);
// console.log(sum);

// Finding Elements with find in Arrays
// let found = numbs.find((num) => num > 6);
// console.log(found);

// Sorting Arrays 
// numbs.sort((a, b) => a - b);
// console.log(numbs);



// CLASSWORK with reduce
let fruits = ["Banana ", "Orange ", " Mango ", "Cherry ", "Pawpaw ", "Pineapple ", "Carrot ", "Tomatoe "];
let sum = fruits.reduce((acc, item, i, arr) => acc +=1, 0);
console.log(sum);

