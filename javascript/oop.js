class Person {
    constructor(name, age, religion, job, relStatus) {
        this.name = name;
        this.age = age;
        this.religion = religion;
        this.job = job;
        this.relStatus = relStatus;
    }

    birthdayMessage() {
        console.log(`
            Happy birthday ${this.name}! You are now ${this.age} old.
            `);
    }
}

let israel = new Person(
    "Israel",
    25,
    "Christianity",
    "Software Developer",
    "Single",
)
console.log(israel)
israel.birthdayMessage();



// class cakeRecipe {
//     constructor(flour, flavour, sugar, honey, butter) {
//         this.flour = flour;
//         this.flavour = flavour;
//         this.sugar = sugar;
//         this.honey = honey;
//         this.butter = butter;
//     }
// } 
// let birthdayCake = new cakeRecipe(
//     "Dangote",
//     "Vanilla Flavour",
//     "Dangote",
//     "Pure honey",
//     "Blueband Butter",
// )
// console.log(cake);


