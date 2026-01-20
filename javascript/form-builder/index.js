// select the button;

// let addBtn = document.getElementById("button");
// console.log(addBtn);
// let formContainer = document.querySelector("form")

// function createNewField() {

    // create a new input element;

    // let newInput = document.createElement("input");

    // set attributes for the new input element;

    // newInput.setAttribute("type", "text");
    // newInput.setAttribute("placeholder", "Enter your name");

    // append the new input element to the form conatainer;

    // formContainer.appendChild(newInput);
// }
// add event listener to the button;

// addBtn.addEventListener("click", createNewField);


let addBtn = document.getElementById("button");
let formContainer = document.querySelector("form");

let fields = [
    {type: "text", placeholder: "Enter your name"},
    {type: "email", placeholder: "Enter your email"},
    {type: "password", placeholder: "Enter your password"},
    {type: "tel", placeholder: "Enter your phone number"},
    {type: "submit", value: "submit"}
]

let currentIndexField = 0;
function createNewField() {
    if(currentIndexField >= fields.length) {
        return;
    }

    let fieldData = fields[currentIndexField];

    let newInput = document.createElement("input");
    newInput.setAttribute("type", fieldData.type);

    if(fieldData.placeholder) {
        newInput.setAttribute("placeholder", fieldData.placeholder);
    }

    if(fieldData.value) {
        newInput.setAttribute("value", fieldData.value);
    }

    if(fieldData.type !== "submit") {
        newInput.required = true;
    }

    formContainer.appendChild(newInput);

    currentIndexField++;

}

addBtn.addEventListener("click", createNewField);