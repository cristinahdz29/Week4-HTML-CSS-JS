//Take the array [3,4,56,7,8,1] and sort them in ascending and descending order.

// have an initial array with all of our values
const unsortedArray = [3, 4, 56, 7, 8, 1];
// empty array that we will add values to later
const sortedArray = [];

//looping through original array with our numbers
for (let i = 0; i < unsortedArray.length; i++) {
    let smallestNumber; // setting the smallest number to an undefined value

    for (let x = 0; x < unsortedArray.length; x++) {
        const currentNumber = unsortedArray[x];

        if (sortedArray.includes(currentNumber)) {
            continue;
        };

        if (!smallestNumber) {
            smallestNumber = currentNumber
        };

        if (currentNumber < smallestNumber) { //to  get the ascending order, just flip the greater than sign to less than
            smallestNumber = currentNumber;
        };
    };

    sortedArray.push(smallestNumber);
};

console.log(sortedArray);