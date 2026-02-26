// const showName = (name) =>  {
// try {
//     alert("My name is " + nam);
// } catch (e) {
//     console.log("Code error: " + e.message);
// } finally {
//     console.log("Server error, please try again in 5 minuites.")
// };
// }
// showName("Esther");


// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Cannot divide by zero");
//     }
//     return a / b;
// }

// try {
//     console.log(divide(10, 0));
// } catch (e) {
//     console.error("Math error:", e.message);
// }

// CLASSWORK
function division(numerator, denominator) {
    try {
        if(typeof(numerator) !== "number") {
        throw new Error("You must enter a number");
    }
    if(typeof(denominator) !== "number") {
        throw new Error("You must enter a number");
    }
    if(denominator === 0) {
        throw new Error("Enter a number greater than or upto param2");
    }
        const divide = numerator / denominator;
        console.log(divide)
    } catch (err) {
        console.error("Math error:", err.message);
    }
    finally {
        console.log("Keep trying, mathematics is easy.");
    }
}
// division(50, 5);
// division("50", 5);
division(50, "5");

