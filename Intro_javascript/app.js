// // most popular language in the world
// // use it to create anything

// console.log("Hello World")
// // console is an object of class console
// // everything is a function or object
// // console object .log(function); .log is a function
// //equivalent of print statement

// //variables
// // var a = 10
// // let a = 10

// // const pi = 3.14 //different from let or var, because this value cannot be changes
// // pi = 4 //will give an error because cannot change this variable
// //constants can be assigned once and their values cannot be changed

// //FUNCTION

// def say_hello():
//     print('Hello')

// //FUNCTIONS AND VARIABLES MUST BE CAMEL CASED IN JS
// function sayHello() {
//     console.log("Hello")
// }
// //CALLING FUNCTION
// sayHello()

// //FUNCTION OR METHOD HOISTING ==> CAN CALL FUNCTION BEFORE IT HAS BEEN DEFINED; JS MOVES FUNCTION TO THE TOP OF THE FILE; MAKES FUNCTION MORE GLOBAL; ALLOWS JS TO CALL FUNCTIONS BEFORE IT GETS DECLARED

// function displayName(name) {
//     console.log(name)
// }

// //get value returned
// function getName(name){
//     return "hello," + name
// }
// //set function to a variable so what is returned is saved to fullName variable and you can do what you want with it
// let fullName = getName("Mary")

// //ARRAYS OR LISTS

// let tasks = []

// //add items to array, use push
// tasks.push("Wash the car")
// tasks.push("Feed the dog")

// //deleting items from array
// let deletedIteme = tasks.pop() //will remove last item added to array; will remove item and return the deleted item

// //deleting item based on index
// delete tasks[0] //delete item on index 0 of the array

// //deleting item using splice
// tasks.splice(0, 1) //start at zero index and remove 1 item

// //ITERATING THROUGH AN ARRAY

// //provide starting point, range it will run, and index ++, incrementing by 1
// for (let index = 0; index <= 10; index++)

// //ACTIVITY 1
// //use for loop to iterate through the array and print out names

// let names = ["Arianna", "Alexa", "Sonya"]

// for (let index = 0; index < names.length; index++) {
//     console.log(names[index])
// }


// let index = 0
// while(index < names.length) {
//     console.log(names[index])
//     index++
// }

// //CONDITIONS; IF AND ELSE

// let version = 2
// let os = "macOS"

// //&& is and operator
// // || is or operator
// if (version == 1 && os == "macOS") {
//     console.log("version 1")
// } else if (version == 2 || os == "windows") {
//     console.log("version 2")
// } else {
//     console.log("undefined version")
// }

//ACTIVITY 2
//write a program which will check if the input or letter is a vowel
// if letter is vowel, print 'vowel'
// if letter is not a vowel, print "not a vowel"

let letter = "a"

//check if a vowel or not, not taking input from user

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    console.log("This letter is a vowel")
} else {
    console.log("This letter is not a vowel")
}

function isVowel(letter) {

    let vowel = false
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        vowel = true
    }
     return vowel
    
}

if(isVowel(letter)){
    console.log('vowel')
}else {
    console.log("not vowel")
}


// ACTIVITY 3
let no1 = 50
let no2 = 10

//write program, hard coding numbers, computes sum of 2 integers, if the sum is in th range of 50-70 return 65, else return 80

function sum(no1, no2) {
    let sum = no1 + no2
    if (sum >= 50 && sum <= 80) {
        return 65
    } else {
        return 80
    }
}

console.log(sum(no1, no2))