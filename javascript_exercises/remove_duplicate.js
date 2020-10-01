//Create an app which removes duplicates from an array

//Example: ["John", "Mary", "Alex", "Steve", "Mary", "John"]

//Result should be: ["John", "Mary", "Alex", "Steve"] 

//needed to create a function that removes duplicates
// # this is my list of names to test
// # this is where we used a dictionary, because if have 2 keys and values equal to each other, they won't repeat
// # then we use Object.keys() to just get all the keys, which are the names
// # then it will  return it back in the form of a list

let names = ["John", "Mary", "Alex", "Steve", "Mary", "John"]
console.log(names)
let dict = {}

for (let index = 0; index <= names.length -1; index++) {
    dict[names[index]] = true
}
//SAME WAY OF DOING IT WITH CLEANER CODE
// names.forEach((name) => {
//     dict[name] = true
// })

console.log(Object.keys(dict))


