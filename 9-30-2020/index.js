//Template literals
// let title = "Wash the car"
// let ul = `<ul>
//             <li>
//             <label>${title}</label>
//             <button onclick='removeButtonClick()'>Remove</button>
//             </li>
//             </ul>`

// document.body.innerHTML = ul

//Activity 1
let firstNameTextBox = document.getElementById("firstName")
let lastNameTextBox = document.getElementById("lastName")
let submitButton = document.getElementById
("submitButton")


let firstName = firstNameTextBox.value
let lastName = lastNameTextBox.value

submitButton.addEventListener("click", function(){
    let fullName = `${lastName}, ${firstName}`
    fullNameHeading.innerHTML = fullName
})