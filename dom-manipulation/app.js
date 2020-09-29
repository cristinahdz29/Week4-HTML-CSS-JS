
// let myDiv = document.getElementById("myDiv")

// console.log(myDiv)

// //change inner HTML of div to hello JS

// myDiv.innerHTML = "Hello Javascript"
// //
// let nameTextBox = document.getElementById("nameTextBox")

// let submitButton = document.getElementById("submitButton")

// let heading = document.getElementById("heading")

// submitButton.addEventListener("click", submitButtonClicked)

// function submitButtonClicked() {
//     console.log("submitButtonClicked")
// }

// //change to anonymous function so only used when button clicked

// submitButton.addEventListener("click", function() {console.log("submitButtonClicked")
//     console.log(nameTextBox.value)
//     heading.innerHTML = nameTextBox.value
// })

//get access to text box value

//Activity 1
//setting all elements equal to a variable
// let firstName = document.getElementById("firstName")
// let lastName = document.getElementById("lastName")
// let submitButton = document.getElementById("submitButton")
// let heading = document.getElementById("fullName")

// //adding event listener to submit button

// submitButton.addEventListener("click", function(){
//     heading.innerHTML = firstName.value + " " + lastName.value
// })

//USE JS TO DYNAMICALLY ADD ELEMENTS TO HTML
// WHY? 

let taskNameTextBox = document.getElementById("taskNameTextBox")
let saveButton = document.getElementById("saveButton")
let taskUl = document.getElementById("taskUl")

saveButton.addEventListener("click", function(){
    let li = document.createElement("li") //create empty li element
    
    //change inner html of li to reflect value of text box
    li.innerHTML = taskNameTextBox.value

    //add li to ul element
    taskUl.appendChild(li)
})