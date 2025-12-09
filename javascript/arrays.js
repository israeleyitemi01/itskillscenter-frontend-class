// Array Literal
// let fruit = "Apple"
// let fruits = ["Banana", "Orange", " Mango", fruit, "Pineapple"];
// console.log(fruits);
// fruits[2] = "kiwi";

// Modifying Array Element
console.log(fruits);
console.log(fruits[fruit.length - 1]);
// console.log(fruits.length);
// length is total number of Array (length start from 1)
// The index of a number is length minus 1(index start from 0)

// Array Construct 
// let numbers = Array (10, 20, 30, 40, 50);
// console.log(numbers);
// console.log(numbers[numbers.length - 3]);

// Array Methods
// 1. Push - Allows you to add value to the end of an array
let tasks = ["Wake up ", " 20 Minuites Meditation", " Pray", " Brush my teeth", " Read a book", " Take my bath"];
console.log(tasks);
tasks.push(" Eat jollof Rice");
console.log("push: " + tasks);

// 2. Shift - Allows you remove value/element from the beginning of an array
tasks.shift();
console.log("shift: " + tasks);

// 3. Unshift - Allows you to add value to the beginning of an array
tasks.unshift("Wake up");
console.log("Unshift: " + tasks);

// 4. Pop - Allows you to remove value from the end of an array
tasks.pop();
console.log("Pop: " + tasks);


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

itSkillsStudents.forEach(i => {
    console.log(i);
})

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

let fruit = "Apple"
let fruits = ["Banana", "Orange", " Mango", fruit, "Pineapple"];
console.log(fruits);
fruits[2] = "kiwi";
fruits.map((fruit, index) => console.log(fruit))
console.log(index + 1 + ". " + fruit);

