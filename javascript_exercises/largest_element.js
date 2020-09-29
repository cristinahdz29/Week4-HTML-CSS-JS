//Create an app which finds the largest number in an array

let numbers = [-1, -3, -200, -4]
console.log(numbers)

let largestNumber = numbers[0]
let smallestNumber = numbers [0]

for (let index = 0; index <= numbers.length -1; index++) {
    if (numbers[index] > largestNumber) {
        largestNumber = numbers[index]
    } else if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index]
    }
}

console.log((largestNumber) + " is the largest number")
console.log((smallestNumber) + " is the smallest number")