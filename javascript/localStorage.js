localStorage.setItem("name", "Israel Eyitemi");
let name = localStorage.getItem("name");
document.body.innerHTML = `<h2>${name}</h2>`

// const h1 = document.querySelector('h1');
// h1.textContent = 'Isreal'

let fruits = ["Orange", "Apple", "Cherry", "Pawpaw"];
// convert the array into a string using JSON.stringify
localStorage.setItem("fruits", JSON.stringify(fruits));
let myFruits = localStorage.getItem("fruits");
console.log(typeof myFruits);
// use JASON.parse to convert the string back to an array to be able to map through
let myFruits2 = JSON.parse(localStorage.getItem("fruits"));
console.log(myFruits2);
myFruits2 = localStorage.clear("fruits");

let person = {
    firstName: "Faith",
    surname: "Eyitemi",
    age: 24,
    relStatus: "Married",
    number: "08030925127"
}

localStorage.setItem("objectKey", JSON.stringify(person));
let retrievedPerson = JSON.parse(localStorage.getItem("objectKey"));
console.log(`Hello Family, my name is ${retrievedPerson.firstName} ${retrievedPerson.surname}. I am ${retrievedPerson.age} years old, I am ${retrievedPerson.relStatus} with 2 kids. This is my phone number ${retrievedPerson.number}.`)

// localStorage.setItem("firstName", JSON.stringify(person.firstName));
// localStorage.setItem("surname", JSON.stringify(person.surname));
// localStorage.setItem("age", JSON.stringify(person.age));
// localStorage.setItem("relStatus", JSON.stringify(person.relStatus));
// localStorage.setItem("number", JSON.stringify(person.number));

// const firstName = JSON.parse(localStorage.getItem("firstName"));
// const surname = JSON.parse(localStorage.getItem("surname"));
// const age = JSON.parse(localStorage.getItem("age"));
// const relStatus = JSON.parse(localStorage.getItem("relStatus"));
// const number = JSON.parse(localStorage.getItem("number"));

// document.body.innerHTML = `
// <p>Hello Family, my name is ${firstName} ${surname}. I am ${age} years old, I am ${relStatus} with 2 kids. This is my phone number ${number}.</p>
// `

