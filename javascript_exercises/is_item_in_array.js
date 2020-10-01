// Create an app whichs returns true / false depending on if the item is in the array 

// item we harcoded
let item = true
//our array that we are checking to see if item is within it
let arr1 = [1, 4, 6, 5]

//setting this to false in beginning, assuming from the start the item is not in the array
isInArray = false

// For loop we will use to iterate through our array
// within our for loop, we will check to see if the item we harcoded is equal to any of the values of the index of the array, if is, we will change isInArray to true; so we are searching through the whole array to see if any one of them is equal to the value we hardcoded in
//finally we will print isInArray
for (let i = 0; i < arr1.length; i++) {
    if (item == arr1[i] && typeof item == typeof arr1[i]) {
        isInArray = true
    }
}

console.log(isInArray)


//Putting in a function

let arr = [1, 4, 6, 5, "sock"]

function InArray(item) {
    let inArray = false
    for (let i = 0; i < arr.length; i++) {
        if (item == arr[i]) {
            inArray = true
        }
    }
    return inArray
}

console.log(InArray("sock"))