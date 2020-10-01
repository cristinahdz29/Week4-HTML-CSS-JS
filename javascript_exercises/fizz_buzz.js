//FIZZ BUZZ

let number = 15

if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz")
} else if (number % 3 == 0) {
    console.log("Fizz") 
} else if (number % 5 == 0) {
    console.log("Buzz") 
} else {
    console.log("This number is neither divisible by 3 or 5") 
}

// Putting it into a function

function fizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        return "FizzBuzz"
    } else if (number % 3 == 0) {
        return "Fizz"
    } else if (number % 5 == 0) {
        return "Buzz"
    } else {
        return "This number is neither divisible by 3 or 5"
    }
}

console.log(fizzBuzz(15))