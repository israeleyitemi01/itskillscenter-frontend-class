// let user = {
//     name: "Esther",
//     age: "26",
//     maritalStatus: "single",
//     children: 0,
//     stateOfOrigin: "Enugu",
//     homeAddress: "69 Queen's Adeola Avenue",
//     officeAddress: "56/58 Adeola Avenue",
//     citizenShip: ["Nigeria", "US"],
//     employed: true,
//     businesses: [
//         { name: "Essie Kitchen", location: "Karaole Estate", hasCAC: true },
//         { name: "Fiona's Lux Hair", location: "Online", hasCAC: true },
//     ]
// }
// console.log(user);
// console.log(user.age);
// console.log(`Welcome ${user.businesses}!`);
// delete user.age

// CLASSWORK
// let userDetails = {
//     firstName: "Israel",
//     lastName: "Eyitemi",
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     age: 30,
//     maritalStatus: "single",
//     children: 0,
//     stateOfOrigin: "Delta",
//     homeAddress: "56/58 Adeola Avenue",
//     officeAddress: "56/58 Adeola Avenue",
//     citizenShip: ["Nigeria", "Canada"],
//     employed: true,
//     businesses: [
//         {name: "Eatery", location: "Lekki", hasCAC: true},
//         {name: "Pharmacy", location: "Ikoyi", hasCAC: true},
//         {name: "Impact Africa Initiative", location: "Online", hasCAC: true},
//   ]
// }
// console.log(userDetails);
// console.log(`Welcome ${userDetails.name}, you are ${userDetails.age} old. You are from ${userDetails.stateOfOrigin}. Your home address is ${userDetails.homeAddress} and office address is ${userDetails.officeAddress}`);
// console.log(`Your are from these countries: ${userDetails.citizenShip.map((country, index) => index + 1 + " " + country)}`);
// console.log(`These are your businesses: ${userDetails.businesses.map((business, index) => index + 1 + " " + business)}`);
// console.log(userDetails.fullName());

// // constructor function
// function person(name, age, eye, children) {
//   this.name = name;
//   this.age = age;
//   this.eyeColor = eye;
//   this.children = children;
//   this.gender = this.gender === "Emmanuel"? (this.gender = "male") : (this.gender = "female");
// }
// const myFather = new person("Emmanuel", 69, "brown", 4);
// const mySister = new person("Esther", 26, "yellow", 2);
// console.log(myFather);
// console.log(mySister);

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   gender: "Male",
//   nationality: ["Nigeria", "Netherland"],
//   fullName: function() {
//   return `${this.firstName} ${this.lastName}`
// }
// };
// console.log(person.fullName());



// Object Display
const person = {
    name: "John",
    age: 30,
    city: "New York"
}

let text = person.name + "," + person.age + "," + person.city;

